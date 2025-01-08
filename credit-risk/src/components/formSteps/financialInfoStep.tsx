import { useFormContext } from 'react-hook-form'
import { CreditFormData } from '../../types/credit'

const FinancialInfoStep = () => {
  const { register, formState: { errors } } = useFormContext<CreditFormData>()

  return (
    <div className="space-y-10">
      <div>
        <label htmlFor="dti" className="block text-sm font-medium text-gray-700">Ratio Deuda/Ingreso</label>
        <p className="text-gray-500 text-xs mt-1">Indique el porcentaje de deuda con respecto a sus ingresos.</p>
        <input
          type="number"
          id="dti"
          step="0.01"
          {...register('dti', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.dti && <p className="mt-1 text-sm text-red-600">{errors.dti.message}</p>}
      </div>

      <div>
        <label htmlFor="delinq_2yrs" className="block text-sm font-medium text-gray-700">Morosidad en los últimos 2 años</label>
        <p className="text-gray-500 text-xs mt-1">Indique cuántas veces ha tenido un registro de morosidad en los últimos 2 años.</p>
        <input
          type="number"
          id="delinq_2yrs"
          {...register('delinq_2yrs', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.delinq_2yrs && <p className="mt-1 text-sm text-red-600">{errors.delinq_2yrs.message}</p>}
      </div>

      <div>
        <label htmlFor="inq_last_6mths" className="block text-sm font-medium text-gray-700">Consultas en los últimos 6 meses</label>
        <p className="text-gray-500 text-xs mt-1">Indique cuántas veces se ha realizado una consulta sobre su crédito en los últimos 6 meses.</p>
        <input
          type="number"
          id="inq_last_6mths"
          {...register('inq_last_6mths', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.inq_last_6mths && <p className="mt-1 text-sm text-red-600">{errors.inq_last_6mths.message}</p>}
      </div>

      <div>
        <label htmlFor="open_acc" className="block text-sm font-medium text-gray-700">Cuentas abiertas</label>
        <p className="text-gray-500 text-xs mt-1">Indique cuántas cuentas ha abierto a lo largo de su vida.</p>
        <input
          type="number"
          id="open_acc"
          {...register('open_acc', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.open_acc && <p className="mt-1 text-sm text-red-600">{errors.open_acc.message}</p>}
      </div>

      <div>
        <label htmlFor="pub_rec" className="block text-sm font-medium text-gray-700">Registros públicos</label>
        <p className="text-gray-500 text-xs mt-1">Indique la cantidad de registros públicos relacionados con su historial crediticio.</p>
        <input
          type="number"
          id="pub_rec"
          {...register('pub_rec', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.pub_rec && <p className="mt-1 text-sm text-red-600">{errors.pub_rec.message}</p>}
      </div>

      <div>
        <label htmlFor="revol_bal" className="block text-sm font-medium text-gray-700">Saldo rotativo</label>
        <p className="text-gray-500 text-xs mt-1">Indique el saldo pendiente de su crédito rotativo (por ejemplo, tarjeta de crédito).</p>
        <input
          type="number"
          id="revol_bal"
          {...register('revol_bal', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.revol_bal && <p className="mt-1 text-sm text-red-600">{errors.revol_bal.message}</p>}
      </div>

      <div>
        <label htmlFor="revol_util" className="block text-sm font-medium text-gray-700">Utilización rotativa (%)</label>
        <p className="text-gray-500 text-xs mt-1">Indique el porcentaje de utilización de su crédito rotativo.</p>
        <input
          type="number"
          id="revol_util"
          step="0.1"
          {...register('revol_util', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.revol_util && <p className="mt-1 text-sm text-red-600">{errors.revol_util.message}</p>}
      </div>

      <div>
        <label htmlFor="total_acc" className="block text-sm font-medium text-gray-700">Total de cuentas</label>
        <p className="text-gray-500 text-xs mt-1">Indique el total de cuentas activas registradas a su nombre.</p>
        <input
          type="number"
          id="total_acc"
          {...register('total_acc', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.total_acc && <p className="mt-1 text-sm text-red-600">{errors.total_acc.message}</p>}
      </div>
    </div>
  )
}

export default FinancialInfoStep


