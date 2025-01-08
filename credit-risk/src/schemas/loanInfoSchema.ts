import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const loanInfoSchema = z.object({
    loan_amnt: z.union([
        z.number({
          required_error: errorMessages.required,
          invalid_type_error: errorMessages.invalidType,
        }).min(500, errorMessages.minValue(500)).max(35000, errorMessages.maxValue(35000)),
        z.literal("").transform(() => null),
      ]).refine(value => value !== null, { message: errorMessages.required }),

  funded_amnt: z.union([
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(500, errorMessages.minValue(500)).max(35000, errorMessages.maxValue(35000)),
    z.literal("").transform(() => null),
  ]).refine(value => value !== null, { message: errorMessages.required }),

  funded_amnt_inv: z.union([
    z.number({
      invalid_type_error: errorMessages.invalidType,
    }).min(0, errorMessages.minValue(0)).max(35000, errorMessages.maxValue(35000)),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),

  term: z.union([
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).int(errorMessages.integerNumber).min(36, errorMessages.minValue(36)).max(60, errorMessages.maxValue(60)),
    z.literal("").transform(() => null),
  ]).refine(value => value !== null, { message: errorMessages.required }),

  int_rate: z.union([
    z.number({
      invalid_type_error: errorMessages.invalidType,
    }).min(5.32, errorMessages.minValue(5.32)).max(28.99, errorMessages.maxValue(28.99)),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),

  installment: z.union([
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(15.67, errorMessages.minValue(15.67)).max(1445.46, errorMessages.maxValue(1445.46)),
    z.literal("").transform(() => null),
  ]).refine(value => value !== null, { message: errorMessages.required }),

  grade: z.enum(['b', 'c', 'e', 'f', 'g'], {
    required_error: errorMessages.required,
  }),

  sub_grade: z.union([
    z.enum(['b', 'c', 'e', 'f', 'g']),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),

  desc: z.string({
    required_error: errorMessages.required,
  }).min(1, errorMessages.minLength(1)).max(512, errorMessages.maxLength(512)),

  purpose: z.enum([
    'credit card',
    'car',
    'small business',
    'wedding',
    'debt consolidation',
    'home improvement',
    'major purchase',
    'medical',
    'moving',
    'vacation',
    'house',
    'renewable energy',
    'educational',
  ], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption,
  }),

  title: z.string({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType,
  }).min(1, errorMessages.minLength(1)).max(124, errorMessages.maxLength(124)),
});
