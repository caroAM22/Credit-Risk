import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cómo calcular mi riesgo crediticio?",
      answer: "Complete todas las secciones del formulario, haciendo clic en 'Siguiente' y, al finalizar, presione 'Enviar' para obtener su resultado."
    },
    {
      question: "¿Cuál es la divisa que utiliza el modelo?",
      answer: "Dólares estadounidenses (USD), por favor ingrese todos los valores teniendo esto en cuenta."
    },
    {
      question: "¿Cómo se calcula el riesgo crediticio?",
      answer: "El riesgo crediticio se calcula utilizando varios factores, incluyendo su historial crediticio, ingresos, deudas actuales y capacidad de pago. Nuestro algoritmo analiza estos datos para determinar la probabilidad de que pueda cumplir con sus obligaciones financieras futuras."
    },
    {
      "question": "¿Qué significa un puntaje de riesgo alto?",
      "answer": "Un puntaje entre 300 y 499 indica un riesgo alto. Esto sugiere que su historial financiero es inestable o poco confiable, lo que puede dificultar la aprobación de crédito o llevar a condiciones desfavorables, como tasas de interés más altas o límites de crédito reducidos. Es recomendable trabajar en mejorar su situación financiera, como reducir deudas o mejorar su historial de pagos."
    },
    {
      "question": "¿Qué significa un puntaje de riesgo moderado?",
      "answer": "Un puntaje entre 500 y 649 refleja un riesgo moderado. Esto indica que su situación financiera es razonablemente estable, pero todavía presenta algunas áreas de mejora. Es posible que sea elegible para crédito, pero probablemente enfrentará tasas de interés más altas o restricciones en los montos solicitados. Es recomendable seguir mejorando su historial financiero para obtener condiciones más favorables en el futuro."
    },
    {
      "question": "¿Qué significa un puntaje de riesgo bajo?",
      "answer": "Un puntaje entre 650 y 799 indica un riesgo bajo. Esto significa que tiene un buen historial financiero, con pagos puntuales y una relación saludable entre ingresos y deudas. Es probable que sea aprobado para crédito con condiciones favorables, como tasas de interés más bajas y mayores montos de crédito. Sin embargo, siempre es recomendable seguir manteniendo una buena gestión financiera para preservar este buen estatus."
    },
    {
      "question": "¿Qué significa un puntaje sin riesgo?",
      "answer": "Un puntaje de 800 o más es excelente, lo que indica un historial financiero muy sólido y un riesgo mínimo. Este puntaje refleja un comportamiento crediticio ejemplar, con pagos puntuales y un bajo nivel de endeudamiento en relación con sus ingresos. Las probabilidades de obtener crédito en condiciones muy favorables son altas, y se pueden ofrecer tasas de interés muy bajas o límites de crédito elevados."
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

