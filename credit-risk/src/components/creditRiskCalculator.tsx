import { useState } from 'react'
import CreditForm from './creditForm'
import ResultDisplay from './resultDisplay'
import LoadingSpinner from './loadingSpinner'
import { CreditFormData, CreditRiskResult } from '../types/credit'

const CreditRiskCalculator = () => {
  const [result, setResult] = useState<CreditRiskResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: CreditFormData) => {
    setIsLoading(true)
    setError(null)
    setResult(null)
    try {
      const response = await fetch('https://example.com/calculateCreditRisk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('La respuesta del servidor ha fallado');
      }
      const riskResult = await response.json();
      setResult(riskResult);
    } catch {
      setError('Error calculando el riesgo del crédito, por favor intente más tarde')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <CreditForm onSubmit={handleSubmit} />
        </div>
      </div>
      
      {isLoading && (
        <div className="mt-8">
          <LoadingSpinner />
        </div>
      )}
      
      {error && (
        <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      {result && (
        <div className="mt-8">
          <ResultDisplay result={result} />
        </div>
      )}
    </div>
  )
}

export default CreditRiskCalculator