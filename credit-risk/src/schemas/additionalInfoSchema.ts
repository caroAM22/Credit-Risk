import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const additionalInfoSchema = z.object({
  initial_list_status: z.preprocess(
      (val) => (val === "" ? undefined : val),
      z.enum(['w','f'], {
        required_error: errorMessages.required,
      })
  ),

  out_prncp: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(15.67, errorMessages.minValue(15.67)).max(1445.46, errorMessages.maxValue(1445.46)),
  ),
  
  out_prncp_inv: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(0, errorMessages.minValue(0)).max(49372.86, errorMessages.maxValue(49372.86)),
  ),
  
  total_pymnt: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(0, errorMessages.minValue(0)).max(57777.5798702, errorMessages.maxValue(57777.5798702)),
      z.null(),
    ])
  )
  .optional(),
  
  
  total_pymnt_inv: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(0, errorMessages.minValue(0)).max(57777.58, errorMessages.maxValue(57777.58)),
      z.null(),
    ])
  )
  .optional(),
  
  total_rec_prncp: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(0, errorMessages.minValue(0)).max(35000.03, errorMessages.maxValue(35000.03)),
  ),
  
  total_rec_int: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(0, errorMessages.minValue(0)).max(24205.62, errorMessages.maxValue(24205.62)),
  ),

  total_rec_late_fee: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(0, errorMessages.minValue(0)).max(358.68, errorMessages.maxValue(358.68)),
      z.null(),
    ])
  )
  .optional(),
  
  recoveries: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(0, errorMessages.minValue(0)).max(33520.27, errorMessages.maxValue(33520.27)),
  ),
  
  collection_recovery_fee: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(0, errorMessages.minValue(0)).max(7002.19, errorMessages.maxValue(7002.19)),
  ),

  last_pymnt_d: z
  .preprocess(
    (value) => {
      if (value === '') return undefined;
      return value;
    },
    z.date({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidDate,
    }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01')))
    .max(new Date('2016-12-31'), errorMessages.maxValue(new Date('2016-12-31'))),
  ),
  
  last_pymnt_amnt: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(0, errorMessages.minValue(0)).max(36475.59, errorMessages.maxValue(36475.59)),
      z.null(),
    ])
  )
  .optional(),
  
  next_pymnt_d: z
  .preprocess(
    (value) => (typeof value === 'string' ? new Date(value) : value),
    z.date({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidDate,
    }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01')))
    .max(new Date('2016-12-31'), errorMessages.maxValue(new Date('2016-12-31'))),
  ),

  last_credit_pull_d: z.preprocess(
    (value) => {
        if (value === '') return undefined;
        return value;
    },
    z.union([
        z.date({
          invalid_type_error: errorMessages.invalidDate,
        })
          .min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01')))
          .max(new Date('2015-12-31'), errorMessages.maxValue(new Date('2015-12-31'))),
        z.null(),
      ])
      .optional()
  ),

  pymnt_plan: z.union([
    z.enum(['n']),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),

  issue_d: z.date({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('2011-01-01'), errorMessages.minValue(new Date('2011-1-1'))).max(new Date('2015-12-31'), errorMessages.maxValue(new Date('2015-12-31'))),
  
  loan_status: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum(['fully paid', 'charged', 'current', 'default', 'late days', 'grace period', 'meet credit policy status fully paid', 'meet credit policy status charged', 'issued'], {
      required_error: errorMessages.required,
    })
  ),

  application_type: z.union([
    z.enum(['individual', 'joint']),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),

  collections_12_mths_ex_med: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(0, errorMessages.minValue(0)).max(20, errorMessages.maxValue(20)),
      z.null(),
    ])
  )
  .optional(),
  
});
