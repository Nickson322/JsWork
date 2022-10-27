/** ЗАДАЧА 24 - Перебор элементов массива
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

myCities.forEach(function(item, i) {
    console.log(item + " is at the index " + i + " in the myCities array");
});

function cityInfo(item, i){
    console.log((myCities[item] + " is at the index " + i + " in the myCities array"))
}

cityInfo(0, 0)