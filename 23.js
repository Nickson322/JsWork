/** ЗАДАЧА 23 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

let cars = []

cars[0] = {
    carBrand: "Audi",
    price: 1200000,
    isAvailableForSale: true
}

cars[1] = {
    carBrand: "BMW",
    price: 1800000,
    isAvailableForSale: false
}

cars[2] = {
    carBrand: "Nissan",
    price: 1100000,
    isAvailableForSale: true
}

cars[3] = {
    carBrand: "Lada",
    price: 980000,
    isAvailableForSale: true
}

console.log(cars);