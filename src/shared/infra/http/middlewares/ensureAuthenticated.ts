import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import authConfig from '@config/auth';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret) as IPayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch (err) {
    throw new AppError('Invalid JWT Token.', 401);
  }
}
