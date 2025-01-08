export const errorMessages = {
  required: 'Este campo es obligatorio',
  invalidType: 'El valor ingresado no es válido',
  positiveNumber: 'Debe ser un número positivo',
  integerNumber: 'Debe ser un número entero',
  minValue: (min: number | Date) => `El valor mínimo es ${min instanceof Date ? min.toLocaleDateString() : min}`,
  maxValue: (max: number | Date) => `El valor máximo es ${max instanceof Date ? max.toLocaleDateString() : max}`,
  minLength: (min: number) => `Debe tener al menos ${min} caracteres`,
  maxLength: (max: number) => `Debe tener como máximo ${max} caracteres`,
  invalidOption: 'Seleccione una opción válida',
  invalidDate: 'La fecha ingresada no es válida',
}
