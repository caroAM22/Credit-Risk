export interface CreditFormData {
    age: number
    income: number
    employmentYears: number
    creditScore: number
    debtToIncomeRatio: number
    loanAmount: number
    loanTerm: number
    interestRate: number
}

export interface CreditRiskResult {
    riskPercentage: number
    title: string
    description: string
}
  
  