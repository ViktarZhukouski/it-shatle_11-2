/*let boot=false
boot = String(boot)
console.log(typeof boot)
//
let str="464"
let num = Number(str)
console.log(typeof num)
//
let num1=Number(null)
console.log(typeof num1)
//
let num2=Number("\t \n")
console.log(num2)
//
let num3=Number("5px")
console.log(num3)
//
let num4=Boolean(1)
console.log(num4)
//
let num5=Boolean(undefined)
console.log(num5)
//
let num6=Boolean(NaN)
console.log(num6)
//
let num7=Boolean(' ')
console.log(num7)
//
console.log(typeof +'4')
//
console.log(2>3)
//
console.log(2==2)
console.log(2!=2)
console.log(null==undefined)
console.log(null===undefined)
console.log()
//let answer=prompt("сколько тебе лет?",'')
//if(answer < 18) {
//    console.log("pupil")
//} else {console.log("older")
//}
//
//let answer=prompt("сколько тебе лет?",'')
//if(answer < 18 && answer > 40) {
//    console.log("pupil")
//} else {console.log("older")
//}
//let login="Viktar@gmail.com"
//let password="qwerty123"
//let loginInput=prompt("введите емайл")
//let passwordInput=prompt("введите пароль")
//if(loginInput===login && passwordInput===password){
//console.log("login is true")
//} else {
//console.log("go out")
//}
let arr=[1,4,9]
if(arr[0]>4) console.log("true")
if(arr[1]>4) console.log("true")
if(arr[2]>4) console.log("true")
//
let mass=[2,4,6,1,3,5,8,6,9,7]
for (let i=0; i<mass.length; i++) {
    console.log(mass[i])
}
//
for (let j=0; j<100; j++) {
    console.log(j)
}
//
let ii=30
while (ii<60) {
    console.log(ii)
    ii++
}
let jj=10
while (jj<271) {
    if(jj%10===0) console.log(jj)
    jj++
}


let arrayPhoneNumber = [80296686813, 80296194165, 103]
for (let i=0; i < arrayPhoneNumber.length; i++) {
    const element = arrayPhoneNumber[i];

switch(arrayPhoneNumber[i]){
    case 80296686813:
    console.log('номер Маши')
    break

    case 80296194165:
    console.log('номер Саши')
    break

    default:
    console.log('номер скорой')
    break
}
}

let arrr = [8,5,4,2,'t',9,'r']
    arrr.push('dd')
    console.log(arrr)
    arrr.pop()
    console.log(arrr)
    arrr.shift()
    console.log(arrr)
    arrr.unshift(2)
    console.log(arrr)
    arrr.reverse()
    console.log(arrr)

    let stoka = 'saha, vania, slava, tania'
    let brr = stoka.split(",")
    console.log(brr)

    let stroka = ['saha', 'vania', 'genia']
    let drr = stroka.fill('ania', 1, 3)
    console.log(drr)

    let xx = [1,2,3,34,4]
    let xx1 = ['11','22','33','44','55']
    let re = xx.concat(xx1)
    console.log(re)
