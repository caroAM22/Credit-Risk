import { useFormContext } from 'react-hook-form'
import { CreditFormData } from '../../types/credit'

const CreditHistoryStep = () => {
  const { register, formState: { errors } } = useFormContext<CreditFormData>()

  return (
    <div className="space-y-10">
      <div>
        <label htmlFor="earliest_cr_line" className="block text-sm font-medium text-gray-700">Fecha de la línea de crédito más antigua</label>
        <p className="text-xs text-gray-500">Indica la fecha en que se abrió tu línea de crédito más antigua.</p>
        <input
          type="date"
          id="earliest_cr_line"
          {...register('earliest_cr_line', { valueAsDate: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.earliest_cr_line && <p className="mt-1 text-sm text-red-600">{errors.earliest_cr_line.message}</p>}
      </div>

      <div>
        <label htmlFor="mths_since_last_delinq" className="block text-sm font-medium text-gray-700">Meses desde la última mora</label>
        <p className="text-xs text-gray-500">Indica el número de meses que han pasado desde la última vez que tuviste un retraso en el pago de una deuda.</p>
        <input
          type="number"
          id="mths_since_last_delinq"
          {...register('mths_since_last_delinq', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.mths_since_last_delinq && <p className="mt-1 text-sm text-red-600">{errors.mths_since_last_delinq.message}</p>}
      </div>

      <div>
        <label htmlFor="acc_now_delinq" className="block text-sm font-medium text-gray-700">Cuentas actualmente en mora</label>
        <p className="text-xs text-gray-500">Indica cuántas cuentas tienes actualmente en mora.</p>
        <input
          type="number"
          id="acc_now_delinq"
          {...register('acc_now_delinq', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.acc_now_delinq && <p className="mt-1 text-sm text-red-600">{errors.acc_now_delinq.message}</p>}
      </div>

      <div>
        <label htmlFor="tot_coll_amt" className="block text-sm font-medium text-gray-700">Monto total en cobranza</label>
        <p className="text-xs text-gray-500">El monto total que tienes pendiente de cobranza por parte de los prestamistas o agencias de cobranza.</p>
        <input
          type="number"
          id="tot_coll_amt"
          {...register('tot_coll_amt', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.tot_coll_amt && <p className="mt-1 text-sm text-red-600">{errors.tot_coll_amt.message}</p>}
      </div>

      <div>
        <label htmlFor="tot_cur_bal" className="block text-sm font-medium text-gray-700">Saldo total actual</label>
        <p className="text-xs text-gray-500">Indica el saldo total actual de todas tus cuentas de crédito abiertas en el momento.</p>
        <input
          type="number"
          id="tot_cur_bal"
          {...register('tot_cur_bal', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.tot_cur_bal && <p className="mt-1 text-sm text-red-600">{errors.tot_cur_bal.message}</p>}
      </div>

      <div>
        <label htmlFor="total_rev_hi_lim" className="block text-sm font-medium text-gray-700">Límite alto del crédito renovable</label>
        <p className="text-xs text-gray-500">El límite total de crédito disponible en tus líneas de crédito renovables, como tarjetas de crédito.</p>
        <input
          type="number"
          id="total_rev_hi_lim"
          {...register('total_rev_hi_lim', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-300 focus:ring-opacity-75"
        />
        {errors.total_rev_hi_lim && <p className="mt-1 text-sm text-red-600">{errors.total_rev_hi_lim.message}</p>}
      </div>
    </div>
  )
}

export default CreditHistoryStep
