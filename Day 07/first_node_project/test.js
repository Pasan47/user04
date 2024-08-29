const fs = require("fs");
const path = require("path"); // Import the path module


function createDirectoryStructure(rootDirectory, structure) {
    if(!fs.existsSync(rootDirectory)){
        fs.mkdirSync(rootDirectory,{recursive: true})
    }

    for (const [key, value] of Object.entries(structure)){
        const fullpath = path.join(rootDirectory, key);
        if(typeof value == "string"){
            fs.writeFileSync(fullpath,"");
        } else {
            createDirectoryStructure(fullpath, value);
        }
    }
    
}

//* Get user input for the root direcotry and the desired structure
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Enter the root directory: ",(rootDir)=> {  //? testDir
    rl.question("Enter the directory structure (JSON Format):", (structure) =>{  //?{"parentFolder": {"childFolder1": "file1.txt", "childFolder2": {}}}
        try {
            const parsedStructure = JSON.parse(structure);
            createDirectoryStructure(rootDir, parsedStructure);
            console.log("Directory structure created successfully");
        }
        catch(error){
            console.error("Invalid JSON strucutre:", error);
        }
        rl.close();
    })
})