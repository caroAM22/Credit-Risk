import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const personalInfoSchema = z.object({
  emp_title: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(1, errorMessages.minLength(1)).max(124, errorMessages.maxLength(124))),
  
  emp_length: z.preprocess(
    (val) => (isNaN(Number(val)) ? undefined : Number(val)),
    z.number({
      required_error: errorMessages.required,
      invalid_type_error: errorMessages.invalidType,
    }).min(1, errorMessages.minValue(1)).max(10, errorMessages.maxValue(10))),
  
  home_ownership: z.enum(['rent', 'mortgage', 'none'], {
    invalid_type_error: errorMessages.invalidOption
  }),
  
  annual_inc: z.preprocess(
    (val) => {
      const numberValue = Number(val);
      return isNaN(numberValue) ? null : numberValue; 
    },
    z.union([
      z.number({
        invalid_type_error: errorMessages.invalidType,
      }).min(0, errorMessages.minValue(0)).max(9500000, errorMessages.maxValue(9500000)),
      z.null(),
    ])
  )
  .optional(),
  
  verification_status: z.union([
    z.enum(['verified', 'source verified']),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),
  
  zip_code: z.union([
    z.enum(['xx']),
    z.null(),
    z.literal("").transform(() => null),
  ]).optional(),
  
  addr_state: z.enum(['az', 'ga', 'il', 'ca', 'nc', 'tx', 'va', 'mo', 'ct', 'ut', 'fl', 'ny', 'pa', 'mn', 'nj', 'ky', 'oh', 'sc', 'ri', 'la', 'wa', 'wi', 'al', 'co', 'ks', 'nv', 'ak', 'md', 'wv', 'vt', 'mi', 'dc', 'sd', 'nh', 'ar', 'nm', 'mt', 'hi', 'wy', 'ok', 'de', 'ms', 'tn', 'ia', 'ne', 'id', 'nd'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),
});
