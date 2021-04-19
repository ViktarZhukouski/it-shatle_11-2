//ДЗ-5
//1
const bun1 = document.querySelector('.mybutton1')
bun1.onclick = function(){
    alert('Привет1!')
}

//2
const bun2 = document.querySelector('.mybutton2')
bun2.onmouseover = function(){
    alert('Привет2!')
}

//3
const bun3 = document.querySelector('.mybutton3')
bun3.ondblclick = function(){
    alert('Привет3!')
}

//4
const bun4 = document.querySelector('.mybutton4')
bun4.onmouseout = function(){
    alert('Привет4!')
}

//5
let btn5 = document.querySelector('.mybutton5')
let btnclick = () => {
    let input5 = document.getElementById('kuku')
    let num5 = input5.value
    alert(num5)
}
btn5.addEventListener("click", btnclick)

//6
let btn6 = document.querySelector('.mybutton6')
let btnclick6 = () => {
    let input6 = document.getElementById('change')
    input6.value = "new text"
    
}
btn6.addEventListener("click", btnclick6)

//7
let btn7 = document.querySelector('.mybutton7')
let btnclick7 = () => {
    let input7 = document.getElementById('monkey')
    input7.src = "./2.jpg"
    
}
btn7.addEventListener("click", btnclick7)

//задачи на this  пропускаю
//14
let btn14 = document.querySelector('.mybutton14')
let btnclick14 = () => {
    let input14 = document.getElementById('chngclr')
    input14.style.color = "red"
    
}
btn14.addEventListener("click", btnclick14)

//15
let btn151 = document.querySelector('.mybutton151')
let btnclick151 = () => {
    let input15 = document.getElementById('ex15')
    input15.style.display = 'none'
    
}
btn151.addEventListener("click", btnclick151)

let btn152 = document.querySelector('.mybutton152')
let btnclick152 = () => {
    let input15 = document.getElementById('ex15')
    input15.style.display = 'inline'
    
}
btn152.addEventListener("click", btnclick152)

//16
let btn16 = document.querySelector('.mybutton16')
let btnclick16 = () => {
    let input16 = document.getElementById('ex16')
    input16.style.color = "red"
    input16.value = "Ой, поменял цвет и css"
    input16.style.height = '30px'
    input16.style.borderRadius = '15px'
}
btn16.addEventListener("click", btnclick16)

//17
let btn171 = document.getElementById('ex171')
let btnclick171 = () => {
    let input171 = document.getElementById('ex171')
    input171.value = "О, теперь на меня не нажать"
    input171.disabled = true
}
btn171.addEventListener("click", btnclick171)

let btn172 = document.getElementById('ex172')
let btnclick172 = () => {
    let input171 = document.getElementById('ex171')
    input171.value = "О, можно нажимать опять!"
    input171.disabled = false
}
btn172.addEventListener("click", btnclick172)

//18
let btn18 = document.querySelector('.mybutton18')
let btnclick18 = () => {
    let input18 = document.querySelector('.mybutton18')
    input18.value++
}
btn18.addEventListener("click", btnclick18)





