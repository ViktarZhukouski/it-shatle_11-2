// фильтр для массива - выбрать из массива значения больше limit
let array3 = [4,2,3,1,6,15]
let resArr3 = []
let filtr =(mas1, mas2, limit) => {
    for (let i = 0; i < mas1.length; i++){
        if (mas1[i] > limit) {
            mas2.push(mas1[i])
        }
    }
    console.log(mas2)
}
filtr(array3, resArr3, 2)