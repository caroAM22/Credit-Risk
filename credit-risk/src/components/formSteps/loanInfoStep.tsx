import { useFormContext } from 'react-hook-form'
import { CreditFormData } from '../../types/credit'

const LoanInfoStep = () => {
  const { register, formState: { errors } } = useFormContext<CreditFormData>()

  const purposeOptions = {
    'credit card': 'Tarjeta de crédito',
    'car': 'Coche',
    'small business': 'Pequeño negocio',
    'wedding': 'Boda',
    'debt consolidation': 'Consolidación de deudas',
    'home improvement': 'Mejora del hogar',
    'major purchase': 'Compra importante',
    'medical': 'Médico',
    'moving': 'Mudanza',
    'vacation': 'Vacaciones',
    'house': 'Casa',
    'renewable energy': 'Energía renovable',
    'educational': 'Educativo'
  };

  return (
    <div className="space-y-10">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título del préstamo</label>
        <input
          type="text"
          id="title"
          {...register('title')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
      </div>

      <div>
        <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Descripción del préstamo</label>
        <textarea
          id="desc"
          {...register('desc')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
          rows={4}
        />
        {errors.desc && <p className="mt-1 text-sm text-red-600">{errors.desc.message}</p>}
      </div>
      
      <div>
        <label htmlFor="loan_amnt" className="block text-sm font-medium text-gray-700">Monto del préstamo</label>
        <p className="text-xs text-gray-500">Ingrese el monto total en dólares del préstamo que desea solicitar.</p>
        <input
          type="number"
          id="loan_amnt"
          {...register('loan_amnt', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.loan_amnt && <p className="mt-1 text-sm text-red-600">{errors.loan_amnt.message}</p>}
      </div>

      <div>
        <label htmlFor="funded_amnt" className="block text-sm font-medium text-gray-700">Monto financiado</label>
        <p className="text-xs text-gray-500">Indique el monto en dólares que realmente será financiado.</p>
        <input
          type="number"
          id="funded_amnt"
          {...register('funded_amnt', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.funded_amnt && <p className="mt-1 text-sm text-red-600">{errors.funded_amnt.message}</p>}
      </div>

      <div>
      <label htmlFor="funded_amnt_inv" className="block text-sm font-medium text-gray-700">Monto financiado de inversión</label>
      <p className="text-xs text-gray-500">Especifique el monto en dólares que se destinará a la financiación de la inversión. Asegúrese de que refleje el monto real aprobado.</p>
        <input
          type="number"
          id="funded_amnt_inv"
          {...register('funded_amnt_inv', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.funded_amnt_inv && <p className="mt-1 text-sm text-red-600">{errors.funded_amnt_inv.message}</p>}
      </div>

      <div>
        <label htmlFor="term" className="block text-sm font-medium text-gray-700">Plazo (meses)</label>
        <p className="text-xs text-gray-500">Especifique el plazo del préstamo en meses.</p>
        <input
          type="number"
          id="term"
          {...register('term', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.term && <p className="mt-1 text-sm text-red-600">{errors.term.message}</p>}
      </div>

      <div>
        <label htmlFor="int_rate" className="block text-sm font-medium text-gray-700">Tasa de interés (%)</label>
        <p className="text-xs text-gray-500">Indique la tasa de interés anual en porcentaje.</p>
        <input
          type="number"
          id="int_rate"
          step="0.01"
          {...register('int_rate', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.int_rate && <p className="mt-1 text-sm text-red-600">{errors.int_rate.message}</p>}
      </div>

      <div>
        <label htmlFor="installment" className="block text-sm font-medium text-gray-700">Cuota</label>
        <p className="text-xs text-gray-500">Ingrese el monto en dólares de cada cuota mensual.</p>
        <input
          type="number"
          id="installment"
          step="0.01"
          {...register('installment', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.installment && <p className="mt-1 text-sm text-red-600">{errors.installment.message}</p>}
      </div>

      <div>
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grado</label>
        <p className="text-xs text-gray-500">Seleccione el grado de calificación del préstamo.</p>
        <select
          id="grade"
          {...register('grade')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {['b', 'c', 'e', 'f', 'g'].map((grade) => (
            <option key={grade} value={grade}>{grade.toUpperCase()}</option>
          ))}
        </select>
        {errors.grade && <p className="mt-1 text-sm text-red-600">{errors.grade.message}</p>}
      </div>

      <div>
        <label htmlFor="sub_grade" className="block text-sm font-medium text-gray-700">Sub-grado</label>
        <p className="text-xs text-gray-500">Seleccione el sub-grado de calificación del préstamo.</p>
        <select
          id="sub_grade"
          {...register('sub_grade')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {['b', 'c', 'e', 'f', 'g'].map((subgrade) => (
            <option key={subgrade} value={subgrade}>{subgrade.toUpperCase()}</option>
          ))}
        </select>
        {errors.sub_grade && <p className="mt-1 text-sm text-red-600">{errors.sub_grade.message}</p>}
      </div>

      <div>
        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">Propósito del préstamo</label>
        <p className="text-xs text-gray-500">Seleccione el propósito principal del préstamo.</p>
        <select
          id="purpose"
          {...register('purpose')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {Object.entries(purposeOptions).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        {errors.purpose && <p className="mt-1 text-sm text-red-600">{errors.purpose.message}</p>}
      </div>
    </div>
  )
}

export default LoanInfoStep
