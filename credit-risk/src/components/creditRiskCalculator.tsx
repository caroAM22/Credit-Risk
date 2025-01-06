import { useState } from 'react'
import CreditForm from './creditForm'
import ResultDisplay from './resultDisplay'
import LoadingSpinner from '../elements/loadingSpinner'
import Modal from './modal'
import { CreditFormData, CreditRiskResult } from '../types/credit'

const CreditRiskCalculator = () => {
  const [result, setResult] = useState<CreditRiskResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (data: CreditFormData) => {
    setIsLoading(true)
    setError(null)
    try {
      // const response = await fetch('https://example.com/calculateCreditRisk', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // });
      // if (!response.ok) {
      //   throw new Error('La respuesta del servidor ha fallado');
      // }
      // const riskResult = await response.json();
      const riskResult = {
        riskPercentage: 76,
        title: "Riesgo",
        description: "En grave riesgo"
      }
      console.log(data);
      setResult(riskResult);
      setIsModalOpen(true);
    } catch {
      setError('Error calculando el riesgo del crédito, por favor intente más tarde')
      setIsModalOpen(true);
    } finally {
      setIsLoading(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setResult(null)
    setError(null)
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg px-4">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Ingrese los detalles del crédito</h2>
        <CreditForm onSubmit={handleSubmit} />
        {isLoading && <LoadingSpinner />}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {error && <div className="text-500 text-center mb-4">{error}</div>}
          {result && <ResultDisplay result={result} />}
        </Modal>
      </div>
    </div>
  )
}

export default CreditRiskCalculator

