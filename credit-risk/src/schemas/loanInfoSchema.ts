import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const loanInfoSchema = z.object({
  loan_amnt: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    })
      .min(500, errorMessages.minValue(500))
      .max(35000, errorMessages.maxValue(35000))
  ),

  funded_amnt: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(500, errorMessages.minValue(500)).max(35000, errorMessages.maxValue(35000)),
  ),

  funded_amnt_inv: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(0, errorMessages.minValue(0)).max(35000, errorMessages.maxValue(35000)),
      z.null(),
    ])
  )
  .optional(),

  term: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(36, errorMessages.minValue(36)).max(60, errorMessages.maxValue(60)),
  ),

  int_rate: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(5.32, errorMessages.minValue(5.32)).max(28.99, errorMessages.maxValue(28.99)),
      z.null(),
    ])
  )
  .optional(),

  installment: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(15.67, errorMessages.minValue(15.67)).max(1445.46, errorMessages.maxValue(1445.46)),
  ),

  grade: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(['b', 'c', 'e', 'f', 'g'], {
      required_error: errorMessages.required,
    })
  ),

  sub_grade: z.union([
    z.enum(['b', 'c', 'e', 'f', 'g']),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),

  desc: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(1, errorMessages.minLength(1)).max(512, errorMessages.maxLength(512))),

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

  title: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(1, errorMessages.minLength(1)).max(124, errorMessages.maxLength(124))),

});
