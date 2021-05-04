//е) С помощью функции reduce получить максимальное значение в массиве
let arr = [2,3,1,4,5];
let result = arr.reduce((a, b) => (a > b) ? a : b)
//let result = Math.max.apply(null, arr) // тоже работает
console.log(result)
