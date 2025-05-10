import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';
import { fromZodError } from 'zod-validation-error';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform<T>(value: unknown) {
    console.log(value);
    try {
      const parsedValue = this.schema.parse(value) as T;
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        throw new BadRequestException({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
          errors: fromZodError(error),
          message: 'Validation failed',
          status: 400,
        });
      }
      throw new BadRequestException('Validation failed');
    }
  }
}
