import { useFormContext } from 'react-hook-form'
import { CreditFormData } from '../../types/credit'

const AdditionalInfoStep = () => {
  const { register, formState: { errors } } = useFormContext<CreditFormData>()

  return (
    <div className="space-y-10">
      <div>
        <label htmlFor="initial_list_status" className="block text-sm font-medium text-gray-700">Estado inicial en la Lista</label>
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
        <label htmlFor="out_prncp" className="block text-sm font-medium text-gray-700">Monto principal pendiente</label>
        <p className="text-xs text-gray-500">Monto restante que se debe del préstamo.</p>
        <input
          type="number"
          id="out_prncp"
          {...register('out_prncp', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.out_prncp && <p className="mt-1 text-sm text-red-600">{errors.out_prncp.message}</p>}
      </div>

      <div>
        <label htmlFor="out_prncp_inv" className="block text-sm font-medium text-gray-700">Monto Principal Pendiente Invertido</label>
        <p className="text-xs text-gray-500">Monto restante en inversiones.</p>
        <input
          type="number"
          id="out_prncp_inv"
          {...register('out_prncp_inv', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.out_prncp_inv && <p className="mt-1 text-sm text-red-600">{errors.out_prncp_inv.message}</p>}
      </div>

      <div>
        <label htmlFor="total_pymnt" className="block text-sm font-medium text-gray-700">Pago total realizado</label>
        <p className="text-xs text-gray-500">El total pagado en el préstamo.</p>
        <input
          type="number"
          id="total_pymnt"
          {...register('total_pymnt', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.total_pymnt && <p className="mt-1 text-sm text-red-600">{errors.total_pymnt.message}</p>}
      </div>

      <div>
        <label htmlFor="total_pymnt_inv" className="block text-sm font-medium text-gray-700">Pago total invertido</label>
        <p className="text-xs text-gray-500">El total pagado sobre inversiones.</p>
        <input
          type="number"
          id="total_pymnt_inv"
          {...register('total_pymnt_inv', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.total_pymnt_inv && <p className="mt-1 text-sm text-red-600">{errors.total_pymnt_inv.message}</p>}
      </div>

      <div>
        <label htmlFor="total_rec_prncp" className="block text-sm font-medium text-gray-700">Monto total principal recuperado</label>
        <p className="text-xs text-gray-500">Monto total recuperado sobre el principal.</p>
        <input
          type="number"
          id="total_rec_prncp"
          {...register('total_rec_prncp', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.total_rec_prncp && <p className="mt-1 text-sm text-red-600">{errors.total_rec_prncp.message}</p>}
      </div>

      <div>
        <label htmlFor="total_rec_int" className="block text-sm font-medium text-gray-700">Monto otal recuperado de intereses</label>
        <p className="text-xs text-gray-500">Monto total recuperado por intereses.</p>
        <input
          type="number"
          id="total_rec_int"
          {...register('total_rec_int', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.total_rec_int && <p className="mt-1 text-sm text-red-600">{errors.total_rec_int.message}</p>}
      </div>

      <div>
        <label htmlFor="recoveries" className="block text-sm font-medium text-gray-700">Recuperaciones totales</label>
        <p className="text-xs text-gray-500">Monto total recuperado de préstamos.</p>
        <input
          type="number"
          id="recoveries"
          {...register('recoveries', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.recoveries && <p className="mt-1 text-sm text-red-600">{errors.recoveries.message}</p>}
      </div>

      <div>
        <label htmlFor="collection_recovery_fee" className="block text-sm font-medium text-gray-700">Tarifa de recuperación de cobranza</label>
        <p className="text-xs text-gray-500">Tarifa total de recuperación de cobranza.</p>
        <input
          type="number"
          id="collection_recovery_fee"
          {...register('collection_recovery_fee', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.collection_recovery_fee && <p className="mt-1 text-sm text-red-600">{errors.collection_recovery_fee.message}</p>}
      </div>

      <div>
        <label htmlFor="last_pymnt_amnt" className="block text-sm font-medium text-gray-700">Monto del último pago</label>
        <p className="text-xs text-gray-500">Monto del último pago realizado.</p>
        <input
          type="number"
          id="last_pymnt_amnt"
          {...register('last_pymnt_amnt', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.last_pymnt_amnt && <p className="mt-1 text-sm text-red-600">{errors.last_pymnt_amnt.message}</p>}
      </div>

      <div>
        <label htmlFor="last_pymnt_d" className="block text-sm font-medium text-gray-700">Fecha del último pago</label>
        <p className="text-xs text-gray-500">Fecha del último pago realizado en el préstamo.</p>
        <input
          type="date"
          id="last_pymnt_d"
          {...register('last_pymnt_d', { valueAsDate: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.last_pymnt_d && <p className="mt-1 text-sm text-red-600">{errors.last_pymnt_d.message}</p>}
      </div>

      <div>
        <label htmlFor="next_pymnt_d" className="block text-sm font-medium text-gray-700">Fecha del próximo pago</label>
        <p className="text-xs text-gray-500">Fecha en la que se espera el próximo pago.</p>
        <input
          type="date"
          id="next_pymnt_d"
          {...register('next_pymnt_d', { valueAsDate: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.next_pymnt_d && <p className="mt-1 text-sm text-red-600">{errors.next_pymnt_d.message}</p>}
      </div>

      <div>
        <label htmlFor="last_credit_pull_d" className="block text-sm font-medium text-gray-700">Fecha del último acceso al crédito</label>
        <p className="text-xs text-gray-500">Fecha en la que se realizó el último acceso al crédito.</p>
        <input
          type="date"
          id="last_credit_pull_d"
          {...register('last_credit_pull_d', { valueAsDate: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.last_credit_pull_d && <p className="mt-1 text-sm text-red-600">{errors.last_credit_pull_d.message}</p>}
      </div>

      <div>
        <label htmlFor="pymnt_plan" className="block text-sm font-medium text-gray-700">Plan de pagos</label>
        <p className="text-xs text-gray-500">Si aplica, indica el plan de pagos, por defecto es "no aplica".</p>
        <select
          id="pymnt_plan"
          {...register('pymnt_plan')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        >
          <option value="n">No aplica</option>
        </select>
        {errors.pymnt_plan && <p className="mt-1 text-sm text-red-600">{errors.pymnt_plan.message}</p>}
      </div>

      <div>
        <label htmlFor="issue_d" className="block text-sm font-medium text-gray-700">Fecha de emisión del préstamo</label>
        <p className="text-xs text-gray-500">Fecha en la que se emitió el préstamo.</p>
        <input
          type="date"
          id="issue_d"
          {...register('issue_d', { valueAsDate: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.issue_d && <p className="mt-1 text-sm text-red-600">{errors.issue_d.message}</p>}
      </div>

      <div>
        <label htmlFor="loan_status" className="block text-sm font-medium text-gray-700">Estado del préstamo</label>
        <p className="text-xs text-gray-500">Indica el estado del préstamo.</p>
        <select
          id="loan_status"
          {...register('loan_status')}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        >
          <option value="fully paid">Pagado completamente</option>
          <option value="charged">Cobrado</option>
          <option value="current">Al día</option>
          <option value="default">Incumplimiento</option>
          <option value="late days">Días de retraso</option>
          <option value="grace period">Período de gracia</option>
          <option value="meet credit policy status fully paid">Cumple con política de crédito - Pagado completamente</option>
          <option value="meet credit policy status charged">Cumple con política de crédito - Cobrado</option>
          <option value="issued">Emitido</option>
        </select>
        {errors.loan_status && <p className="mt-1 text-sm text-red-600">{errors.loan_status.message}</p>}
      </div>

      <div>
        <label htmlFor="application_type" className="block text-sm font-medium text-gray-700">Estado del préstamo</label>
        <p className="text-xs text-gray-500">Indica el estado del préstamo.</p>
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
