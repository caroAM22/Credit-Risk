import { z } from 'zod';
import { errorMessages } from '../utils/errorMessages';

export const creditFormSchema = z.object({
  loan_amnt: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(500, errorMessages.minValue(500)).max(35000, errorMessages.maxValue(35000)),
  
  funded_amnt: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(500, errorMessages.minValue(500)).max(35000, errorMessages.maxValue(35000)),
  
  funded_amnt_inv: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(35000, errorMessages.maxValue(35000)).optional(),
  
  term: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).int(errorMessages.integerNumber).min(36, errorMessages.minValue(36)).max(60, errorMessages.maxValue(60)),
  
  int_rate: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(5.32, errorMessages.minValue(5.32)).max(28.99, errorMessages.maxValue(28.99)).optional(),
  
  installment: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(15.67, errorMessages.minValue(15.67)).max(1445.46, errorMessages.maxValue(1445.46)),
  
  grade: z.enum(['b', 'c', 'e', 'f', 'g'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),
  
  sub_grade: z.enum(['b', 'c', 'e', 'f', 'g'], {
    invalid_type_error: errorMessages.invalidOption
  }).optional(),
  
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
  
  issue_d: z.date({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('2011-01-01'), errorMessages.minValue(new Date('2011-1-1'))).max(new Date('2015-12-31'), errorMessages.maxValue(new Date('2015'))),
  
  loan_status: z.enum(['fully paid', 'charged', 'current', 'default', 'late days', 'grace period', 'meet credit policy status fully paid', 'meet credit policy status charged', 'issued'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),
  
  pymnt_plan: z.literal('n').optional(),
  
  purpose: z.enum(['credit card', 'car', 'small business', 'wedding', 'debt consolidation', 'home improvement', 'major purchase', 'medical', 'moving', 'vacation', 'house', 'renewable energy', 'educational'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),
  
  title: z.string({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(1, errorMessages.minLength(1)).max(124, errorMessages.maxLength(124)),
  
  zip_code: z.string().optional(),
  
  addr_state: z.enum(['az', 'ga', 'il', 'ca', 'nc', 'tx', 'va', 'mo', 'ct', 'ut', 'fl', 'ny', 'pa', 'mn', 'nj', 'ky', 'oh', 'sc', 'ri', 'la', 'wa', 'wi', 'al', 'co', 'ks', 'nv', 'ak', 'md', 'wv', 'vt', 'mi', 'dc', 'sd', 'nh', 'ar', 'nm', 'mt', 'hi', 'wy', 'ok', 'de', 'ms', 'tn', 'ia', 'ne', 'id', 'nd'], {
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidOption
  }),
  
  dti: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(9999, errorMessages.maxValue(9999)).optional(),
  
  delinq_2yrs: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(39, errorMessages.maxValue(39)).optional(),
  
  earliest_cr_line: z.date({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('1954-01-01'), errorMessages.minValue(new Date('1954-01-01'))).max(new Date('2007-12-31'), errorMessages.maxValue(new Date('2007'))),
  
  inq_last_6mths: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(33, errorMessages.maxValue(33)).optional(),
  
  mths_since_last_delinq: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(188, errorMessages.maxValue(188)).optional(),
  
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
  
  last_pymnt_d: z.date({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01'))).max(new Date('2016-12-31'), errorMessages.maxValue(new Date('2016'))),
  
  last_pymnt_amnt: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(36475.59, errorMessages.maxValue(36475.59)).optional(),
  
  next_pymnt_d: z.date({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01'))).max(new Date('2016-12-31'), errorMessages.maxValue(new Date('2016-12-31'))),

  last_credit_pull_d: z.date({
    invalid_type_error: errorMessages.invalidDate
  }).min(new Date('2007-01-01'), errorMessages.minValue(new Date('2007-01-01'))).max(new Date('2015-12-31'), errorMessages.maxValue(new Date('2015'))).optional(),
  
  collections_12_mths_ex_med: z.number({
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minValue(0)).max(20, errorMessages.maxValue(20)).optional(),
  
  application_type: z.enum(['individual', 'joint'], {
    invalid_type_error: errorMessages.invalidOption
  }).optional(),
  
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
  
  desc: z.string({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(1, errorMessages.minLength(1)).max(512, errorMessages.maxLength(512)),
});

