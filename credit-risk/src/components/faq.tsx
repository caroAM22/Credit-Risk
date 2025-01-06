import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cómo se calcula el riesgo crediticio?",
      answer: "El riesgo crediticio se calcula utilizando varios factores, incluyendo su historial crediticio, ingresos, deudas actuales y capacidad de pago. Nuestro algoritmo analiza estos datos para determinar la probabilidad de que pueda cumplir con sus obligaciones financieras futuras."
    },
    {
      question: "¿Qué significa mi resultado?",
      answer: "Su resultado indica la probabilidad de que pueda cumplir con sus obligaciones financieras. Un riesgo bajo sugiere una buena salud financiera, mientras que un riesgo alto podría indicar la necesidad de mejorar su situación financiera. Por ejemplo, un riesgo bajo podría significar que tiene un historial de pagos puntual y una buena relación entre sus ingresos y deudas."
    },
    {
      question: "¿Es seguro ingresar mis datos?",
      answer: "Sí, todos los datos ingresados son procesados de forma segura y no se almacenan en nuestros servidores. Utilizamos encriptación de punta a punta para proteger su información durante la transmisión. Además, nuestros sistemas están diseñados para procesar los datos en tiempo real sin guardar ninguna información personal."
    }
  ]

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ

