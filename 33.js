/** ЗАДАЧА 33 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

isArrayEmpty = (inputArray) => {
  (inputArray.length > 0) 
  ? console.log('Массив не пустой')
  : console.log('Массив пустой')
}

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))