import React from 'react';
import { CreditRiskResult } from '../types/credit';
import { motion } from 'framer-motion';

type Props = {
  result: CreditRiskResult
}

const statusTranslations: { [key: string]: string } = {
  "current": "Al día",
  "fully paid": "Totalmente pagado",
  "charged": "Cobrado",
  "late days": "Días de retraso",
  "issued": "Emitido",
  "grace period": "Período de gracia",
  "meet credit policy status fully paid": "Cumple política de crédito totalmente pagado",
  "default": "Incumplimiento",
  "meet credit policy status charged": "Cumple política de crédito cobrado"
};

const loanStatusData = [
  { status: "current", count: 601779 },
  { status: "fully paid", count: 207723 },
  { status: "charged", count: 45248 },
  { status: "late days", count: 13948 },
  { status: "issued", count: 8460 },
  { status: "grace period", count: 6253 },
  { status: "meet credit policy status fully paid", count: 1988 },
  { status: "default", count: 1219 },
  { status: "meet credit policy status charged", count: 761 }
];

const calculateScore = (probabilities: { [key: string]: number }): number => {
  const riskyStatuses = ["late days", "default", "grace period"];
  const goodStatuses = ["fully paid", "current", "meet credit policy status fully paid"];
  
  const riskScore = riskyStatuses.reduce((sum, status) => sum + (probabilities[status] || 0), 0);
  const goodScore = goodStatuses.reduce((sum, status) => sum + (probabilities[status] || 0), 0);
  
  // Normalize the score to be between 300 and 850
  const normalizedScore = 300 + (1 - riskScore + goodScore) / 2 * (850 - 300);
  
  return Math.round(Math.max(300, Math.min(850, normalizedScore)));
};

const ResultDisplay: React.FC<Props> = ({ result }) => {
  const totalLoans = loanStatusData.reduce((sum, item) => sum + item.count, 0);
  const score = calculateScore(result.probabilities);

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl rounded-2xl overflow-hidden mt-8">
      <div className="bg-indigo-600 px-6 py-4 text-white">
        <h2 className="text-2xl font-bold mb-2">Su predicción: <span className="font-semibold text-yellow-300">{statusTranslations[result.prediction]}</span></h2>
      </div>
      <div className="p-6 space-y-8">
        <section>
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">
            Distribución dentro de la población
          </h3>
          <div className="space-y-4">
            {loanStatusData.map((item) => {
              const percentage = ((item.count / totalLoans) * 100).toFixed(2);
              const isPredicted = item.status === result.prediction;

              return (
                <div key={item.status} className="relative">
                  <div className="flex items-center mb-2">
                    <div className="w-64 text-sm font-medium text-indigo-700">
                      {statusTranslations[item.status]}
                    </div>
                    <div className="flex-1 ml-4">
                      <motion.div 
                        className="relative h-8 bg-indigo-100 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className={`absolute left-0 top-0 h-full ${
                            isPredicted ? 'bg-indigo-600' : 'bg-indigo-400'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </motion.div>
                    </div>
                    <div className="w-20 text-right text-sm font-medium text-indigo-800">
                      {percentage}%
                    </div>
                  </div>
                  {isPredicted && (
                    <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-yellow-400"></div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">
            Scorecard
          </h3>
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-medium text-indigo-700">Su puntaje de crédito:</div>
            <motion.div 
              className="text-4xl font-bold text-indigo-600"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {score}
            </motion.div>
          </div>
          <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              style={{ width: `${((score - 300) / (850 - 300)) * 100}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${((score - 300) / (850 - 300)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex justify-between text-sm text-indigo-600 mb-4">
            <span>300</span>
            <span>850</span>
          </div>
          <div className="bg-indigo-50 rounded-lg p-4 mb-4">
            <h4 className="text-lg font-semibold text-indigo-800 mb-2">Explicación de su puntaje</h4>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">300-499:</span> Riesgo alto. Dificultades para obtener crédito o condiciones menos favorables.
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">500-649:</span> Riesgo moderado. Elegible para crédito, pero con posibles restricciones o tasas más altas.
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">650-799:</span> Riesgo bajo. Buen historial de crédito y bajo riesgo. Altas probabilidades de aprobación con buenas condiciones.
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">800-850:</span> Sin riesgo. Historial de crédito muy sólido y muy bajo nivel de riesgo. Condiciones de crédito muy favorables.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultDisplay;

