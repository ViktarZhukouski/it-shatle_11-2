//з) Преобразуйте массив в объект используя функцию reduce. 
//Используйте начальное значение (второй параметр)
let videos = [{
"id": 65432445,
"title": "The Chamber"
}, {
"id": 675465,
"title": "Fracture"
}, {
"id": 70111470,
"title": "Die Hard"
}, {
"id": 654356453,
"title": "Bad Boys"
}];

let newObj = {}
for (let i = 0; i < videos.length; i++){
let newobjid = videos[i].id
let newobjval = videos[i].title
newObj[newobjid] = newobjval
}
console.log(newObj)  //как здесь воспользоваться reduce не придумал