//!async calls

// let pizza;
// console.log("I am hungry")
// console.log("Order Pizza")

// function makePizza() {
//     setTimeout(()=>{
//         pizza = "Cheese PIzza";
//         console.log("PIzza is ready");
//     },10000
    
//     );
    
// }

// makePizza();
// console.log(`eat ${pizza}`);

//! call backfunctions

// function orderPizza(callback) {
//     setTimeout(()=>{
//         pizza = "Cheese PIzza";
//         console.log("PIzza is ready");
//         callback(pizza)
//     },10000
    
//     );
// }

// function eatPizza(piza) {
//     console.log(`eat ${pizza}`);
    
// }
// orderPizza(eatPizza);

//! Promise function

// const promise1 = new Promise( (resolved, reject) => {
//     setTimeout(() => {
//         console.log("Get the user");
//         resolved({secretId: "123"});
//         reject(new Error("not working"));
//     }, 3000)
// });

// //todo Call promise
// promise1.then(
//     result =>console.log(result)
// ).catch(
//     error =>console.log(error)
// );


//! async and wait

const apiURL = 'https://api.lyrics.ovh';

//Serch song by artist
async function getSong(term) {

    const user = await fetch(`${apiURL}/suggest/${term}`);
    const data = await user.json();

   console.log(user);
   console.log(data);
    
}

getSong('never');