import { CreditRiskResult } from '../types/credit';

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

const ResultDisplay = ({ result }: Props) => {
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

  const totalLoans = loanStatusData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="bg-gray-100 px-6 py-4">
        <p className="text-lg font-semibold text-gray-800">
          Su predicción: <span className="text-blue-600">{statusTranslations[result.prediction]}</span>
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Esta visualización representa la distribución de estados de préstamo.
          La barra resaltada en azul oscuro con una marca amarilla a la izquierda indica su predicción.
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Distribución de Estados de Préstamo
        </h3>
        <div className="space-y-4">
          {loanStatusData.map((item) => {
            const percentage = ((item.count / totalLoans) * 100).toFixed(2);
            const isPredicted = item.status === result.prediction;

            return (
              <div key={item.status} className="relative">
                <div className="flex items-center mb-2">
                  <div className="w-64 text-sm font-medium text-gray-700">
                    {statusTranslations[item.status]}
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`absolute left-0 top-0 h-full ${
                          isPredicted ? 'bg-blue-600' : 'bg-blue-400'
                        }`}
                        style={{ width: `${percentage}%` }}
                      >
                      </div>
                    </div>
                  </div>
                  <div className="w-20 text-right text-sm font-medium text-gray-900">
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
      </div>
    </div>
  );
};

export default ResultDisplay;

