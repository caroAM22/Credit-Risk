export interface CreditFormData {
    loan_amnt: number | string;
    funded_amnt: number | string;
    funded_amnt_inv?: number | null;
    term: number | string;
    int_rate?: number | null;
    installment: number | string;
    grade: string;
    sub_grade?: string | null;
    emp_title: string;
    emp_length: number | string;
    home_ownership: string;
    annual_inc?: number | null;
    verification_status?: string | null;
    issue_d?: Date | null;
    loan_status?: string | null;
    pymnt_plan?: string | null;
    purpose: string;
    title: string;
    zip_code?: string | null;
    addr_state: string;
    dti?: number | null;
    delinq_2yrs?: number | null;
    earliest_cr_line?: Date | null;
    inq_last_6mths?: number | null;
    mths_since_last_delinq?: number | null;
    open_acc?: number | null;
    pub_rec?: number | null;
    revol_bal?: number | null;
    revol_util?: number | null;
    total_acc?: number | null;
    initial_list_status: string;
    out_prncp: number | string;
    out_prncp_inv: number | string;
    total_pymnt?: number | null;
    total_pymnt_inv?: number| null;
    total_rec_prncp: number | string;
    total_rec_int: number | string;
    total_rec_late_fee?: number | null;
    recoveries: number | string;
    collection_recovery_fee: number | string;
    last_pymnt_d: Date;
    last_pymnt_amnt?: number | null;
    next_pymnt_d: Date;
    last_credit_pull_d?: Date | null;
    collections_12_mths_ex_med?: number | null;
    application_type?: string | null;
    acc_now_delinq?: number| null;
    tot_coll_amt?: number| null;
    tot_cur_bal?: number| null;
    total_rev_hi_lim: number| string;
    desc: string;
  }
  
  export interface CreditRiskResult {
    riskPercentage: number;
    title: string;
    description: string;
  }