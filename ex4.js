// отобрать видео с рейтингом 5.

let ids = []
for (let i = 0; i < 4; i++){
    if (newReleases[i].rating[0] > 4){
        ids.push(newReleases[i].id)
    }
}
console.log(ids)
