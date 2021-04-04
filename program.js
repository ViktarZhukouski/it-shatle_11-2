// ДЗ-2
//1
console.log(true + false) //здесь операция логическое сложение 0 И 1 = 1     

console.log(12/'6') //при наличии мат. знака / второе значение воспринимается как число

console.log('number'+15+3)//здесь первое слагаемое строка, поэтому остальные тоже обрабатываются по правилам строк

console.log(15+3+"number")//операции идут в той последовательности как записаны: сначала сумма чисел, затем слжение строк

console.log([1]>null)//наличие элемента в массиве воспринимается как значение в отличие от null которое означает отсутствие такового

console.log('foo' + + 'bar') //первое "слагаемое" воспринимается как строка, ко второму мат. операции не применимы, поэтому footNaN

console.log('true'==true)//второе значение в равенстве однозначно логическое, сравнение со строкой невозможно

console.log(false=='false') //случай, аналогичный предыдущему

console.log(null=='')//наличие '' воспринимается как наличие строки, пусть пустой, поэтому false

console.log(!!'false'==!!'true') //значения воспринимаются как логические, а не строки

console.log(['x']=='x')//элемент массива строк, т.е. сам п себе стока, равен строке

console.log([]+null+1) //соединенные по строковым правилам объекты...
    console.log(typeof [])
    console.log(typeof null)

console.log(0 || "0" && {}) //часть условного оператора без тела...

console.log([1,2,3]==[1,2,3]) // массивы надо сравнивать поэлементно

//2 отключу, а то алерт мешает
//let i=3
//while(i) {
//    alert(i--)
//    console.log(i)
//} //последнее возвращенное значение 1, а i установлено значение 0, поэтому цикл остановлен

//3
let ii=40
while(ii<=91) {
    console.log(ii, 'ex.   3')
    ii++
}

//4
let ia=11
while(ia<=340) {
    if(ia%4==0){
    console.log(ia, 'ex.4')}
    ia++
}

//5
for (let ib=100; ib>= -5; ib--){
    console.log(ib)
}

//6
let arr6=[1,6,8,14,0,4]
for (let ic=0;  ic<=arr6.length; ic++) {
    if (arr6[ic]>3 && arr6[ic]<10) {console.log(arr6[ic], 'ex.6')}
}

//7
let arr7=[1,2,3,4,5,6,7,8,9]
let el=[]
for (let ih=0; ih < arr7.length; ih++){
    el[ih] = '-'+arr7[ih]
}
let sum1=''
for(let iq=0; iq < el.length; iq++){
    sum1 = sum1+el[iq]
    if(iq==el.length-1){console.log(sum1+'-')}    
}

//8
let arrweek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
for (let dd=0; dd < arrweek.length; dd++){
    if (dd<5) console.log(arrweek[dd])
    else console.log('%c%s','font-weight: bold',arrweek[dd])
}

//9
let arrayweek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
let today= new Date
let day=today.getDay()
for (let nd=0; nd < arrayweek.length; nd++){
    if (nd != day) console.log(arrayweek[nd])
    if (nd == day) console.log('%c%s', 'color: red; font-style: italic', arrayweek[nd])
}

//10
let nnn=1000
let res=0
for (let num=1; num < 50; num++) {
res=nnn/2
if (res > 50) {nnn=res; console.log(num, res)}
else {console.log('Stop! iterations: ', num, 'res', res); break}
}
