import { useFormContext } from 'react-hook-form'
import { CreditFormData } from '../../types/credit'

const AdditionalInfoStep = () => {
  const { register, formState: { errors } } = useFormContext<CreditFormData>()

  return (
    <div className="space-y-10">
      <div>
        <label htmlFor="initial_list_status" className="block text-sm font-medium text-gray-700">Estado inicial en la lista</label>
        <p className="text-xs text-gray-500">El estado inicial en la lista de crédito, puede ser 'F' o 'W'.</p>
        <select
          id="initial_list_status"
          {...register('initial_list_status')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        >
          <option value="f">F</option>
          <option value="w">W</option>
        </select>
        {errors.initial_list_status && <p className="mt-1 text-sm text-red-600">{errors.initial_list_status.message}</p>}
      </div>


      <div>
        <label htmlFor="application_type" className="block text-sm font-medium text-gray-700">Tipo de aplicación</label>
        <p className="text-xs text-gray-500">Indica el tipo de aplicación.</p>
        <select
          id="application_type"
          {...register('application_type')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        >
          <option value="individual">Individual</option>
          <option value="joint">Conjunto</option>
        </select>
        {errors.application_type && <p className="mt-1 text-sm text-red-600">{errors.application_type.message}</p>}
      </div>

      <div>
        <label htmlFor="collections_12_mths_ex_med" className="block text-sm font-medium text-gray-700">Deudas en los últimos 12 meses</label>
        <p className="text-xs text-gray-500">Cantidad de deudas en los últimos 12 meses excluyendo las médicas.</p>
        <input
          type="number"
          id="collections_12_mths_ex_med"
          {...register('collections_12_mths_ex_med', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.collections_12_mths_ex_med && <p className="mt-1 text-sm text-red-600">{errors.collections_12_mths_ex_med.message}</p>}
      </div>
    </div>
  )
}

export default AdditionalInfoStep
