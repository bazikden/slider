// function CoffeeMashine(power){
//     this.waterAmount = 0
//     let waterHeatCapacity = 4200
//     console.log('Coffee machine with power'+ power +'Wt')
//     getBoilTime = ()=>{
//         console.log(this)
//         return this.waterAmount * waterHeatCapacity *80/power
//     }

//     function onReady(){
//         console.log('coffee is done')
//     }

//     this.run = ()=>{
//         let interval = setTimeout(onReady,getBoilTime())
//         this.interval = interval
//     }
//     this.stop = () =>{
//         console.log('Not Done')
//         clearTimeout(this.interval)
//     }
// }

// let coffeeMashine = new CoffeeMashine(1000)
// coffeeMashine.waterAmount =20
// coffeeMashine.run()
// let stop = document.getElementById('test')

// stop.addEventListener('click',()=>coffeeMashine.stop())

// function  curry(f){
//     return (a)=>  (b)=> f(a,b)
// }

// function sum(a,b){
//     return a+b
// }

// let curried = curry(sum)

// console.log(curried(10)(2))

// function curry(x,y,z){
//     return x + y + z
// }
//
// function sum(x){
//
// }
// sum.bind(curry,20,30)
//
// console.log(sum(10))