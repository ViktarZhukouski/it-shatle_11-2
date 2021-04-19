const arrObj = [
    {id:1, name:'Pasha', surname:'Ivanov'},
    {id:2, name:'Masha', surname:'Petrova'},
    {id:3, name:'Katia', surname:'Sidor'},
    {id:1, name:'Petr', surname:'Smith'}
]
//arrObj.find(el => el.id === 1)
console.log(arrObj.map(el => el.name + '!'))
arrObj.forEach(el=> console.log(el))

let x = [[1,2],[2,3],5]
let arr1 = x.flat()
console.log(arr1)

function showConsole ()
{
    let x = [[1,2],[2,3],5]
    let arr1 = x.flat()
    console.log(arr1)
}
showConsole()
showConsole()
showConsole()
showConsole()



