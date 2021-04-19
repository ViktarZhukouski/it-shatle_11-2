const str = 'hello'
console.log(str)
//console.log(man)

if (true){
    const man = 'Man'
    console.log(man)
    console.log(str)
}

//function foo1 (){
//    let num1 = 5
//    const num2 = 10
//    let num3 = 23
//    function foo2 (){
//    num1 = 5
//    num2 = 10
//    num3 = 23
//    }
//    foo2()
//}
//foo1()

function doExample (a, callback){
    console.log(a)
    callback()
}
doExample(1, function(){
    console.log(2)
})

//let real = document.title
//console.log(real)
document.title = 25
console.log(document.title)

const url = document.URL
console.log(url)

const domain = document.domain
console.log(domain)

const div = document.getElementById('mydiv')
console.log(div)

const div1 = document.querySelector('div')
console.log(div1)

const div2 = document.getElementById('divone')
console.log(div2)

const div3 = document.querySelectorAll('.container')
console.log(div3)

const div4 = document.querySelectorAll('.container')
for (i=0; i<2; i++)
console.log('2 items',div4[i])

const div5 = document.querySelector('.container')
div5.style.background = 'red'
console.log(div5)
