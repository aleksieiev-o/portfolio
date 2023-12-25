import {ZodRawShape} from 'zod';
// @ts-ignore
import {ZodString} from 'zod/lib/types';

export interface IUserRequestShape extends ZodRawShape {
  firstName: ZodString;
  lastName: ZodString;
  email: ZodString;
  subject: ZodString;
  message: ZodString;
}
