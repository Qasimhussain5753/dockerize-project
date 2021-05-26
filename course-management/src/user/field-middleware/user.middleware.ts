import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';
import { ForbiddenException, BadRequestException } from '@nestjs/common';
const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();
  // return value?.toUpperCase();;
  const { info, context } = ctx;
  console.log('context', context);
  const { extensions } = info.parentType.getFields()[info.fieldName];
  console.log('roles', extensions.role);

  const userRole = 'USER';
  const adminRole = 'ADMIN';
  if (adminRole !== extensions.role) {
    // or just "return null" to ignore
    // return null;
    throw new ForbiddenException(
      `User does not have sufficient permissions to access "${info.fieldName}" field.`,
    );
  }
  // return value;
};
export { loggerMiddleware };
