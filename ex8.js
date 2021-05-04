//ж) С помощью функций map, reduce, вывести url у которого самая большая площадь
let boxarts = [{
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    }, {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    }, {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }];
    
    let newbox = []
    for (let i = 0; i < boxarts.length; i++) {
        newbox[i] = boxarts[i].width*boxarts[i].height
    }
    let maxres = newbox.reduce((a, b) => (a > b) ? a : b)
    for (let j = 0; j < boxarts.length; j++) {
      if (boxarts[j].width*boxarts[j].height == maxres){
        console.log(boxarts[j].url)
      }
    }    
    
    