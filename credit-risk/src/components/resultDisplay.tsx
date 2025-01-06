import { CreditRiskResult } from '../types/credit'

type Props = {
  result: CreditRiskResult
}

const ResultDisplay = ({ result }: Props) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-8">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{result.title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{result.description}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Porcentaje de Riesgo</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-4">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${result.riskPercentage}%` }}></div>
                </div>
                <span className="text-sm font-medium text-gray-700">{result.riskPercentage}%</span>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ResultDisplay

