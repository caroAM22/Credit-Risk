import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const loanInfoSchema = z.object({
  purpose: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.enum([
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
    })
  ),
});
