/** ЗАДАЧА 34 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

cityInfo = (city, i) => {
    return city + " is at the index " + i + " in the myCities array"
}

for(let i in myCities){
    console.log(cityInfo(myCities[i], i));
}
