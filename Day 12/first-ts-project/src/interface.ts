//* if its interface we can have different interfaces with same name but we cant do this in type


interface userNew {
    firstName: string | number;   // Either string or number this is called UNION in typescript
    lastName :string
    userId: number;
}

interface userNew{
    dob?: Date;
}

interface adminUser extends userNew{
    role : "admin"|"superAdmin"
}

const amalya: userNew = {
    firstName: "amalya",
    lastName: "amalaya",
    userId: 12
}
const pasan: adminUser = {
    firstName: "amalya",
    lastName: "amalaya",
    userId: 12,
    role: "admin"
}