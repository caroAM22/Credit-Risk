import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const financialInfoSchema = z.object({
      dti: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(9999, errorMessages.maxValue(9999)).optional(),
      
      delinq_2yrs: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(39, errorMessages.maxValue(39)).optional(),
      
      inq_last_6mths: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(33, errorMessages.maxValue(33)).optional(),
      
      open_acc: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(90, errorMessages.maxValue(90)).optional(),
      
      pub_rec: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(86, errorMessages.maxValue(86)).optional(),
      
      revol_bal: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(2904836, errorMessages.maxValue(2904836)).optional(),
      
      revol_util: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(892.3, errorMessages.maxValue(892.3)).optional(),
      
      total_acc: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(1, errorMessages.minValue(1)).max(169, errorMessages.maxValue(169)).optional(),
      
});
