const {mongoose} = require("mongoose")
const tutorial = require("./tutorial")
const author = require("./author");
const connectToDatabase = require("./db");




async function addTutorial(tute){
    return tutorial
    .create(tute)
    .then((tute1)=>{
        console.log("tutorial created");
        return tute1;
    })
    .catch((error)=>{
        console.log(error);
    })
}

async function addAuthor(auth){
    return author
    .create(auth)
    .then((auth1)=>{
        console.log("author added");
        return auth1;
    })
    .catch((error)=>{
        console.log(error);
    })
}


//*add tutorials to author rf.array ----->Find by ID and push

async function addTutorialsToAuthor(authorID, tute) {
    return author.findByIdAndUpdate(authorID, {$push:{tutorial:tute.id}}).then(()=>{
        console.log("test");
    })
    
}

//*add  authors to tutorial rf.array
async function addAuthorsToTutorial(tutorialID, auth) {
    return tutorial.findByIdAndUpdate(tutorialID, { $push:{author:auth.id}})
    
}

let createdTutorial = new Object();
let createdTutorial1 = new Object();
let createdAuthor = new Object();
let createdAuthor1 = new Object();


async function createDocuments() {
    await connectToDatabase();


    addTutorial({name : "How to install python"}).then((tu)=>{
        createdTutorial = tu;
        console.log(tu);
    });
    createdAuthor = await addAuthor({name: "John Doe"});
    createdAuthor1 = await addAuthor({name:"Sanuri Himalka"})
    
}
async function fillReferences() {
    
    await addTutorialsToAuthor(createdAuthor.id, createdTutorial);
    await addTutorialsToAuthor(createdAuthor1.id, createdTutorial)
    await addAuthorsToTutorial(createdTutorial.id, createdAuthor)
    await addAuthorsToTutorial(createdTutorial.id, createdAuthor1)
}
async function run() {
    await createDocuments();
    
}
async function run1() {
    await fillReferences();
    
}
run();
run1();