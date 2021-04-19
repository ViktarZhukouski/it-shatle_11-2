let str1 = "aaa@bbb@ccc"
let newstr =str1.replaceAll ('@','!')
console.log(newstr)
//
let str2 = 'aaabbbccc'
console.log(str2.slice(3,6))
console.log(str2.substr(3,3))
console.log(str2.substring(3,6))
//
let str3 = "js"
let res3 = str3.toUpperCase()
console.log(res3)
//
let str4 = '123456'
let res4 = str4.split('').reverse().join()
console.log(res4)
//
let str5 = 'index.html'
let checkHtml=(b) => b.substr(-4) == 'html'
console.log(checkHtml(str5))
//
let num66 = 7
let Cube = (cc) => cc = cc*cc*cc
console.log(Cube(num66))
//
let num67 = 77
let getEven = cr => cr%2 == 0
console.log(getEven(num67))
//
let user = {
    name: 'Artem',
    isAdmin: true,
    age: 22
}
console.log(user.isAdmin)
//delete user.isAdmin
console.log(user.isAdmin)
console.log(user['age'])
console.log('isAdmin' in user)
//
for (key in user) {
    console.log(user[key])
}
//
let city = {
    name: 'Minsk',
    status: "Capital",
    population: 2000000
}
delete city.status
console.log(city.status)

city.population = 1800000
console.log(city.population)

console.log(Object.keys(city))


city.area=49
for (key in city) {
    console.log(city[key])
}
let user12 = {
    isAdm: "artem"
}
let admin = user12
user12.isAdm = "Will"
console.log(admin)

let objj = {
    1:'aaa',
    2:'bbb',
    3:'ccc'
}
let dArr = _.toPairs(objj)
console.log(dArr)
