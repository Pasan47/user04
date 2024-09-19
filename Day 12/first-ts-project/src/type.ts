type user = {
    readonly age:number
    email: string;
    userId: number;
    marriageStatue?: boolean   //*Optional variables

}

const sanuri : user = {email: "slt", userId:1, age:10}
// sanuri.age = 30  //!Cannot assign to 'age' because it is a read-only property.


