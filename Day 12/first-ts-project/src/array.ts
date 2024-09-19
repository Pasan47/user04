let myArray: (string|number) []  = [1,2 ,"1","2"]

//*we can have compound type but sometimes we have to check the type n get them accordingly

//* we  can use any as a type but the purpose of using typescript is type safety.
myArray.map ((e:string|number)=>{
    if(typeof e === "number") {
        e.toString();
    }
})