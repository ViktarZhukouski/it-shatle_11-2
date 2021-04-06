//ДЗ-3
//1
let arr1 = ['a','b','c']
let res1 = [1,2,3]
console.log(arr1.concat(res1))
//2
let arr2 = ['a','b','c']
let res2 = arr2.push(1,2,3)
console.log(arr2)
//3
let res3 = []
console.log(arr2.reverse(res3))
//4
let arr4 = [1,2,3,4,5]
let res4 = []
res4 = arr4.slice(0, 3)
console.log(res4)
//5
let res5 = []
res5 = arr4.slice(-2, 5)
console.log(res5)
//6
const arrObj = {js:'test', jq:'hello', css:'world'}
let res6 = []
res6 = Object.keys(arrObj)
console.log(res6)
//7
let arr7 = [5,3,6,2,7,1,8]
let arr77 = []
let j = 0
for (let i = 0; i<arr7.length; i++){
    j = (arr7.length - 1) - i
    arr77[j] = arr7[i]
}
console.log(arr77)
//8
let arr8 = [[1,2,3],[4,5],[6]]
let res8 = []
res8 = arr8.flat()
const reducer = (acc, curr) => acc + curr
console.log(res8.reduce(reducer))
//9
let arr9 = [[[1,2],[3,4]],[[7,8]]]
let res9 = arr9.flat()
let res99 = res9.flat()
const red = (accum, cur) => accum + cur
console.log(res99.reduce(red))
//10
function arrCompare(){
    let mass10 = [3,7,9,8]
    let mass20 = [3,7,9]
    if (mass10.length !== mass20.length) return false
    else 
        for (let l = 0; l < mass10.length; l++){
            if (mass10[l] !== mass20[l]) return false
        }
    return true
}
console.log(arrCompare())

//11
let arr11 = [6,4,9]
let res11 = []
res11 = arr11.map(item => Math.pow(item, 2))
console.log(res11)
//12
let arr12 = [1,-3,2,-4,-5,6]
let res12 = []
function isPositive(value) {
    return value > 0;
  }
res12 = arr12.filter(isPositive)
console.log(res12)
//13
let arr13 = [5,3,6,4,7,-8,1]
const resum = (accumul, current) => accumul + current
let res13 = arr13.reduce(resum)
console.log(res13)