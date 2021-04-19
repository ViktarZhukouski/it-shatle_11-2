const block = document.querySelector('.container_')
block.classList.add('hero-slider')
console.log(block)

block.classList.remove('container_')
console.log(block)


console.log(block.classList.contains('cons'))

block.classList.toggle('hero')
console.log(block)

block.classList.toggle('hero')
console.log(block)

const dv = document.querySelector('#s1')
console.log(dv.id)
console.log(dv.className)
console.log(dv.title)
dv.id = 's2'
dv.className = 'class2'
dv.title = 'tt2'
console.log(dv.id)
console.log(dv.className)
console.log(dv.title)

console.log(dv.getAttribute('id'))
console.log(dv.getAttribute('hero'))
console.log(dv.getAttribute('class'))
console.log(dv.getAttribute('title'))

dv.setAttribute("vic","tor")
console.log(dv)

dv.removeAttribute("vic")
console.log(dv)

const divv = document.createElement("div")
divv.id = "myid"
divv.className = "hero"
console.log(divv)

const btn = document.querySelector('.btn_two')
btn.onclick = function(){
    alert('hello button')
}
//let btn3 = document.querySelector('.newclick')
//let buttonclick = () => {
//    let input = document.getElementById('npt')
//    input.value = 'Artem'
//}
//btn3.addEventListener("click", buttonclick)

/*let btn3 = document.querySelector('.newclick')
let buttonclick = () => {
    let input = document.getElementById('npt')
    let num = input.value
    alert(Math.pow(num,2))
}
btn3.addEventListener("click", buttonclick)*/

let btn3 = document.querySelector('.newclick')
let buttonclick = () => {
    let input1 = document.getElementById('npn')
    let input2 = document.getElementById('tpt')
    let num1 = input1.value
    let num2 = input2.value
    input1.value = num2
    input2.value = num1
}
btn3.addEventListener("click", buttonclick)

