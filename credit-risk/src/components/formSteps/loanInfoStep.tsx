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
