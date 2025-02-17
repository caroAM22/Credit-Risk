import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const additionalInfoSchema = z.object({
  initial_list_status: z.preprocess(
      (val) => (val === "" ? undefined : val),
      z.enum(['w','f'], {
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
