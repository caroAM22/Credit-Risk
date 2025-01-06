import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CreditFormData } from '../types/credit'
import { errorMessages } from '../utils/errorMessages'

const schema = z.object({
  age: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).int(errorMessages.integerNumber).positive(errorMessages.positiveNumber).max(120, errorMessages.maxAge),
  income: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).positive(errorMessages.positiveNumber),
  employmentYears: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).int(errorMessages.integerNumber).nonnegative(errorMessages.positiveNumber),
  creditScore: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).int(errorMessages.integerNumber).min(300, errorMessages.minCreditScore).max(850, errorMessages.maxCreditScore),
  debtToIncomeRatio: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minDebtToIncomeRatio).max(1, errorMessages.maxDebtToIncomeRatio),
  loanAmount: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).positive(errorMessages.positiveNumber),
  loanTerm: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).int(errorMessages.integerNumber).positive(errorMessages.positiveNumber),
  interestRate: z.number({
    required_error: errorMessages.required,
    invalid_type_error: errorMessages.invalidType
  }).min(0, errorMessages.minInterestRate).max(100, errorMessages.maxInterestRate),
})

type Props = {
  onSubmit: (data: CreditFormData) => void
}

const CreditForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<CreditFormData>({
    resolver: zodResolver(schema)
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Edad</label>
          <div className="mt-1">
            <input
              type="number"
              id="age"
              {...register('age', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.age && <p className="mt-2 text-sm text-red-600">{errors.age.message}</p>}
        </div>

        <div>
          <label htmlFor="income" className="block text-sm font-medium text-gray-700">Ingreso Anual</label>
          <div className="mt-1">
            <input
              type="number"
              id="income"
              {...register('income', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.income && <p className="mt-2 text-sm text-red-600">{errors.income.message}</p>}
        </div>

        <div>
          <label htmlFor="employmentYears" className="block text-sm font-medium text-gray-700">Años de Empleo</label>
          <div className="mt-1">
            <input
              type="number"
              id="employmentYears"
              {...register('employmentYears', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.employmentYears && <p className="mt-2 text-sm text-red-600">{errors.employmentYears.message}</p>}
        </div>

        <div>
          <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">Puntaje de Crédito</label>
          <div className="mt-1">
            <input
              type="number"
              id="creditScore"
              {...register('creditScore', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.creditScore && <p className="mt-2 text-sm text-red-600">{errors.creditScore.message}</p>}
        </div>

        <div>
          <label htmlFor="debtToIncomeRatio" className="block text-sm font-medium text-gray-700">Ratio Deuda/Ingreso</label>
          <div className="mt-1">
            <input
              type="number"
              id="debtToIncomeRatio"
              step="0.01"
              {...register('debtToIncomeRatio', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.debtToIncomeRatio && <p className="mt-2 text-sm text-red-600">{errors.debtToIncomeRatio.message}</p>}
        </div>

        <div>
          <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Monto del Préstamo</label>
          <div className="mt-1">
            <input
              type="number"
              id="loanAmount"
              {...register('loanAmount', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.loanAmount && <p className="mt-2 text-sm text-red-600">{errors.loanAmount.message}</p>}
        </div>

        <div>
          <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">Plazo del Préstamo (meses)</label>
          <div className="mt-1">
            <input
              type="number"
              id="loanTerm"
              {...register('loanTerm', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.loanTerm && <p className="mt-2 text-sm text-red-600">{errors.loanTerm.message}</p>}
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">Tasa de Interés (%)</label>
          <div className="mt-1">
            <input
              type="number"
              id="interestRate"
              step="0.01"
              {...register('interestRate', { valueAsNumber: true })}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          {errors.interestRate && <p className="mt-2 text-sm text-red-600">{errors.interestRate.message}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calcular Riesgo
        </button>
      </div>
    </form>
  )
}

export default CreditForm

