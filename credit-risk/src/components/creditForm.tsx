import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreditFormData } from '../types/credit'
import LoanInfoStep from './formSteps/loanInfoStep'
import PersonalInfoStep from './formSteps/personalInfoStep'
import FinancialInfoStep from './formSteps/financialInfoStep'
import CreditHistoryStep from './formSteps/creditHistoryStep'
import AdditionalInfoStep from './formSteps/additionalInfoStep'
import { loanInfoSchema } from '../schemas/loanInfoSchema';
import { financialInfoSchema } from '../schemas/financialInfoSchema'
import { personalInfoSchema } from '../schemas/personalInfoSchema'
import { additionalInfoSchema } from '../schemas/additionalInfoSchema'
import { historyInfoSchema } from '../schemas/historyInfoSchema'

type Props = {
  onSubmit: (data: CreditFormData) => void;
};

const steps = [
  { title: 'Información del Préstamo', component: LoanInfoStep, schema: loanInfoSchema },
  { title: 'Información Personal', component: PersonalInfoStep, schema: personalInfoSchema },
  { title: 'Información Financiera', component: FinancialInfoStep, schema: financialInfoSchema },
  { title: 'Historial Crediticio', component: CreditHistoryStep, schema: historyInfoSchema },
  { title: 'Información Adicional', component: AdditionalInfoStep, schema: additionalInfoSchema },
]

const CreditForm = ({ onSubmit }: Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const CurrentStep = steps[currentStep];
  const methods = useForm({
    resolver: zodResolver(CurrentStep.schema),
    mode: 'onChange',
    defaultValues: {
      loan_amnt: '',
      funded_amnt: '',
      funded_amnt_inv: null,
      term: '',
      int_rate: null,
      installment: '',
      grade: '',
      sub_grade: null,
      emp_title: '',
      emp_length: '',
      home_ownership: '',
      annual_inc: null,
      verification_status: null,
      issue_d: null,
      loan_status: '',
      pymnt_plan: null,
      purpose: '',
      title: '',
      zip_code: null,
      addr_state: '',
      dti: null,
      delinq_2yrs: null,
      earliest_cr_line: null,
      inq_last_6mths: null,
      mths_since_last_delinq: null,
      open_acc: null,
      pub_rec: null,
      revol_bal: null,
      revol_util: null,
      total_acc: null,
      initial_list_status: '',
      out_prncp: '',
      out_prncp_inv: '',
      total_pymnt: null,
      total_pymnt_inv: null,
      total_rec_prncp: '',
      total_rec_int: '',
      total_rec_late_fee: null,
      recoveries: '',
      collection_recovery_fee: '',
      last_pymnt_d: new Date('2007-01-01'),
      last_pymnt_amnt: null,
      next_pymnt_d: new Date('2007-01-01'),
      last_credit_pull_d: null,
      collections_12_mths_ex_med: null,
      application_type: null,
      acc_now_delinq: null,
      tot_coll_amt: null,
      tot_cur_bal: null,
      total_rev_hi_lim: '',
      desc: '',
    },
  });

  // const { handleSubmit } = methods
  const { handleSubmit, getValues } = methods
  const nextStep = async () => {
    const isValidStep = await methods.trigger();
    if (isValidStep) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleFinalSubmit = () => {
    const allValues = getValues();
    onSubmit(allValues);
  };


  const CurrentStepComponent = steps[currentStep].component

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFinalSubmit)} className="space-y-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
          <div className="mt-2 flex">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-2 ${
                  index <= currentStep ? 'bg-blue-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        <CurrentStepComponent />

        <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          disabled={currentStep === 0}
        >
          Anterior
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Enviar
          </button>
        )}
        </div>
      </form>
    </FormProvider>
  )
}

export default CreditForm

