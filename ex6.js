//своя реализация reduce
let massA = [1,2,3]
let redUce = (accum) => {
for (let i = 0; i < massA.length; i++){
    accum = accum + massA[i]
    }
console.log(accum)
}
redUce(0)
redUce(10)
