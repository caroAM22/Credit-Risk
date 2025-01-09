import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const financialInfoSchema = z.object({
      dti:  z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(9999, errorMessages.maxValue(9999)),
          z.null(),
        ])
      )
      .optional(),

      delinq_2yrs: z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(39, errorMessages.maxValue(39)),
          z.null(),
        ])
      )
      .optional(),
      
      inq_last_6mths: z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(33, errorMessages.maxValue(33)),
          z.null(),
        ])
      )
      .optional(),
      
      open_acc: z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(90, errorMessages.maxValue(90)),
          z.null(),
        ])
      )
      .optional(),
      
      pub_rec: z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(86, errorMessages.maxValue(86)),
          z.null(),
        ])
      )
      .optional(),
      
      revol_bal: z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(2904836, errorMessages.maxValue(2904836)),
          z.null(),
        ])
      )
      .optional(),
      
      revol_util: z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(892.3, errorMessages.maxValue(892.3)),
          z.null(),
        ])
      )
      .optional(),
      
      total_acc: z.preprocess(
        (val) => {
          const numberValue = Number(val);
          return isNaN(numberValue) ? null : numberValue; 
        },
        z.union([
          z.number({
            invalid_type_error: errorMessages.invalidType,
          }).min(0, errorMessages.minValue(0)).max(169, errorMessages.maxValue(169)),
          z.null(),
        ])
      )
      .optional(),
});
