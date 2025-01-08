import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const personalInfoSchema = z.object({
  emp_title: z.string({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(1, errorMessages.minLength(1)).max(124, errorMessages.maxLength(124)),
  
  emp_length: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(1, errorMessages.minValue(1)).max(10, errorMessages.maxValue(10)).optional(),
  
  home_ownership: z.enum(['rent', 'mortgage', 'none'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),
  
  annual_inc: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(9500000, errorMessages.maxValue(9500000)).optional(),
  
  verification_status: z.enum(['verified', 'source verified'], {
    invalid_type_error: errorMessages.invalidOption
  }).optional(),
  
  zip_code: z.string().optional(),
  
  addr_state: z.enum(['az', 'ga', 'il', 'ca', 'nc', 'tx', 'va', 'mo', 'ct', 'ut', 'fl', 'ny', 'pa', 'mn', 'nj', 'ky', 'oh', 'sc', 'ri', 'la', 'wa', 'wi', 'al', 'co', 'ks', 'nv', 'ak', 'md', 'wv', 'vt', 'mi', 'dc', 'sd', 'nh', 'ar', 'nm', 'mt', 'hi', 'wy', 'ok', 'de', 'ms', 'tn', 'ia', 'ne', 'id', 'nd'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),
});
