import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const historyInfoSchema = z.object({
      earliest_cr_line: z.date({
        required_error: errorMessages.required,
        invalid_type_error: errorMessages.invalidDate
      }).min(new Date('1954-01-01'), errorMessages.minValue(new Date('1954-01-01'))).max(new Date('2007-12-31'), errorMessages.maxValue(new Date('2007'))),
      
      mths_since_last_delinq: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(188, errorMessages.maxValue(188)).optional(),
      
      acc_now_delinq: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(14, errorMessages.maxValue(14)).optional(),
  
      tot_coll_amt: z.number({
        required_error: errorMessages.required,
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(9152545, errorMessages.maxValue(9152545)),
      
      tot_cur_bal: z.number({
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(8000078, errorMessages.maxValue(8000078)).optional(),
      
      total_rev_hi_lim: z.number({
        required_error: errorMessages.required,
        invalid_type_error: errorMessages.invalidType
      }).min(0, errorMessages.minValue(0)).max(9999999, errorMessages.maxValue(9999999)),
});
