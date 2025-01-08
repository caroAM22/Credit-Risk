import { useFormContext } from 'react-hook-form'
import { CreditFormData } from '../../types/credit'

const PersonalInfoStep = () => {
  const { register, formState: { errors } } = useFormContext<CreditFormData>()

  return (
    <div className="space-y-10">
      <div>
        <label htmlFor="emp_title" className="block text-sm font-medium text-gray-700">Título del empleo</label>
        <p className="text-gray-500 text-xs mt-1">Ingrese su título o puesto actual en el empleo.</p>
        <input
          type="text"
          id="emp_title"
          {...register('emp_title')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.emp_title && <p className="mt-1 text-sm text-red-600">{errors.emp_title.message}</p>}
      </div>

      <div>
        <label htmlFor="emp_length" className="block text-sm font-medium text-gray-700">Años de empleo</label>
        <p className="text-gray-500 text-xs mt-1">Indique cuántos años lleva en su actual empleo.</p>
        <input
          type="number"
          id="emp_length"
          {...register('emp_length', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.emp_length && <p className="mt-1 text-sm text-red-600">{errors.emp_length.message}</p>}
      </div>

      <div>
        <label htmlFor="home_ownership" className="block text-sm font-medium text-gray-700">Propiedad de vivienda</label>
        <p className="text-gray-500 text-xs mt-1">Seleccione el tipo de propiedad de su vivienda actual.</p>
        <select
          id="home_ownership"
          {...register('home_ownership')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        >
          <option value="">Seleccione una opción</option>
          <option value="rent">Alquiler</option>
          <option value="mortgage">Hipoteca</option>
          <option value="none">Ninguna</option>
        </select>
        {errors.home_ownership && <p className="mt-1 text-sm text-red-600">{errors.home_ownership.message}</p>}
      </div>

      <div>
        <label htmlFor="annual_inc" className="block text-sm font-medium text-gray-700">Ingreso anual</label>
        <p className="text-gray-500 text-xs mt-1">Indique su ingreso anual antes de impuestos.</p>
        <input
          type="number"
          id="annual_inc"
          {...register('annual_inc', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.annual_inc && <p className="mt-1 text-sm text-red-600">{errors.annual_inc.message}</p>}
      </div>

      <div>
        <label htmlFor="verification_status" className="block text-sm font-medium text-gray-700">Estado de verificación</label>
        <p className="text-gray-500 text-xs mt-1">Seleccione su estado de verificación.</p>
        <select
          id="verification_status"
          {...register('verification_status')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        >
          <option value="">Seleccione una opción</option>
          <option value="verified">Verificado</option>
          <option value="source verified">Fuente Verificada</option>
        </select>
        {errors.verification_status && <p className="mt-1 text-sm text-red-600">{errors.verification_status.message}</p>}
      </div>

      <div>
        <label htmlFor="zip_code" className="block text-sm font-medium text-gray-700">Código Postal</label>
        <input
          type="text"
          id="zip_code"
          {...register('zip_code')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.zip_code && <p className="mt-1 text-sm text-red-600">{errors.zip_code.message}</p>}
      </div>

      <div>
        <label htmlFor="addr_state" className="block text-sm font-medium text-gray-700">Estado</label>
        <p className="text-gray-500 text-xs mt-1">Seleccione el estado de su dirección de residencia.</p>
        <select
          id="addr_state"
          {...register('addr_state')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        >
          <option value="">Seleccione un estado</option>
          {['az', 'ga', 'il', 'ca', 'nc', 'tx', 'va', 'mo', 'ct', 'ut', 'fl', 'ny', 'pa', 'mn', 'nj', 'ky', 'oh', 'sc', 'ri', 'la', 'wa', 'wi', 'al', 'co', 'ks', 'nv', 'ak', 'md', 'wv', 'vt', 'mi', 'dc', 'sd', 'nh', 'ar', 'nm', 'mt', 'hi', 'wy', 'ok', 'de', 'ms', 'tn', 'ia', 'ne', 'id', 'nd'].map((state) => (
            <option key={state} value={state}>{state.toUpperCase()}</option>
          ))}
        </select>
        {errors.addr_state && <p className="mt-1 text-sm text-red-600">{errors.addr_state.message}</p>}
      </div>
    </div>
  )
}

export default PersonalInfoStep



