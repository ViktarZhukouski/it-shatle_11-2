//1
let str='привет'
let num=123
let flag=true
let txt='true'
console.log(typeof str)
console.log(typeof num)
console.log(typeof flag)
console.log(typeof txt)
//2
let a1=5+3
let a2=5-3
let a3=5*3
let a4=5/3
console.log(a1, a2, a3, a4)
//3
let a6=5%3
let a7=3%5
let a8=5+'3'
let a9='5'-3
let a10=75+'кг'
console.log(a6, a7, a8, a9, a10)
//4
let height=23
let width=10
let s=height*width
console.log(s, 'см^2')
//5
let heightC=10
let dC=4
const p=3.14159
let v=p*heightC*(dC/2)**2
console.log(v)
//6
let n=3
let m=4
let k= Math.sqrt((Math.pow(n, 2)+m**2))
console.log('гипотенуза =',k)
//7

let array = [1,2,3,4,5,6,7,8,9,10,11,12];
let nFib=[]
for (let i=2;  i<array.length; i++) {
    nFib[0]=0;
    nFib[1]=1;
    nFib[i]=nFib[i-1]+nFib[i-2];
console.log(nFib[11]);
}

//8
let sum=2000000
let pr=0.1
let years=5
let perepl=sum*pr*years
console.log(perepl, 'руб.')
