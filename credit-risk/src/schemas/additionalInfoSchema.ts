import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const additionalInfoSchema = z.object({
  initial_list_status: z.enum(['f', 'w'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),

  out_prncp: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(49372.86, errorMessages.maxValue(49372.86)),
  
  out_prncp_inv: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(49372.86, errorMessages.maxValue(49372.86)),
  
  total_pymnt: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(57777.5798702, errorMessages.maxValue(57777.5798702)).optional(),
  
  total_pymnt_inv: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(57777.58, errorMessages.maxValue(57777.58)).optional(),
  
  total_rec_prncp: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(35000.03, errorMessages.maxValue(35000.03)),
  
  total_rec_int: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(24205.62, errorMessages.maxValue(24205.62)),
  
  total_rec_late_fee: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(358.68, errorMessages.maxValue(358.68)).optional(),
  
  recoveries: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(33520.27, errorMessages.maxValue(33520.27)),
  
  collection_recovery_fee: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(7002.19, errorMessages.maxValue(7002.19)),

  last_pymnt_d: z
  .preprocess(
    (value) => (typeof value === 'string' ? new Date(value) : value),
    z.date({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidDate,
    }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01')))
    .max(new Date('2016-12-31'), errorMessages.maxValue(new Date('2016-12-31'))),
  ),
  
  last_pymnt_amnt: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(36475.59, errorMessages.maxValue(36475.59)).optional(),
  
  next_pymnt_d: z
  .preprocess(
    (value) => (typeof value === 'string' ? new Date(value) : value),
    z.date({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidDate,
    }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01')))
    .max(new Date('2016-12-31'), errorMessages.maxValue(new Date('2016-12-31'))),
  ),

  last_credit_pull_d: z.date({
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01'))).max(new Date('2015-12-31'), errorMessages.maxValue(new Date('2015-12-31'))).optional(),
  
  pymnt_plan: z.literal('n').optional(),

  issue_d: z.date({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('2011-01-01'), errorMessages.minValue(new Date('2011-1-1'))).max(new Date('2015-12-31'), errorMessages.maxValue(new Date('2015-12-31'))),
  
  loan_status: z.enum(['fully paid', 'charged', 'current', 'default', 'late days', 'grace period', 'meet credit policy status fully paid', 'meet credit policy status charged', 'issued'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),

  application_type: z.enum(['individual', 'joint'], {
    invalid_type_error: errorMessages.invalidOption
  }).optional(),

  collections_12_mths_ex_med: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(20, errorMessages.maxValue(20)).optional(),
  
});
