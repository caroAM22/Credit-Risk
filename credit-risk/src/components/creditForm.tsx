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
      loan_amnt: 15000,
      funded_amnt: 15000,
      funded_amnt_inv: 12000,
      term: 36,
      int_rate: 10.99,
      installment: 450,
      grade: 'b',
      sub_grade: 'b',
      emp_title: 'Software Engineer',
      emp_length: 5,
      home_ownership: 'rent',
      annual_inc: 60000,
      verification_status: 'verified',
      issue_d: new Date('2014-06-01'),
      loan_status: 'current',
      pymnt_plan: 'n',
      purpose: 'Consolidación préstamo',
      title: 'Consolidación préstamo',
      zip_code: 'xx',
      addr_state: 'ca',
      dti: 18.5,
      delinq_2yrs: 0,
      earliest_cr_line: new Date('2005-01-01'),
      inq_last_6mths: 1,
      mths_since_last_delinq: 24,
      open_acc: 10,
      pub_rec: 0,
      revol_bal: 8000,
      revol_util: 30.5,
      total_acc: 25,
      initial_list_status: 'f',
      out_prncp: 1000,
      out_prncp_inv: 4000,
      total_pymnt: 11000,
      total_pymnt_inv: 10000,
      total_rec_prncp: 10000,
      total_rec_int: 1000,
      total_rec_late_fee: 100,
      recoveries: 10,
      collection_recovery_fee: 100,
      last_pymnt_d: new Date('2015-12-01'),
      last_pymnt_amnt: 450,
      next_pymnt_d: new Date('2015-01-01'),
      last_credit_pull_d: new Date('2015-11-01'),
      collections_12_mths_ex_med: 0,
      application_type: 'individual',
      acc_now_delinq: 10,
      tot_coll_amt: 50,
      tot_cur_bal: 30000,
      total_rev_hi_lim: 25000,
      desc: 'Consolidation of credit card debt',
    },    
  });

  // const { handleSubmit } = methods
  const { handleSubmit, getValues } = methods
  const nextStep = async () => {
    console.log(getValues());
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
    console.log(allValues);
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

