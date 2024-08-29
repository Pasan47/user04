const { dir, log } = require("console");
const path = require("path");  //?default module in node

//* joining paths

const joinedPath = path.join("directory", "file.txt");

console.log(joinedPath);   //? Output: directory\file.txt

//* Getting directory name

const dirname = path.dirname("/path/to/file.txt");
console.log(dirname);    //? Output: /path/to

//* get the file base name

const basename = path.basename("/path/to/file.txt")
console.log(basename);  //? Output: file.txt

//* get the file extension

const extname = path.extname("/path/to/file.txt")
console.log(extname); //? Output: .txt

//* Normalizing path

const normalizedPath = path.normalize("/path/to/../file.txt")
console.log(normalizedPath); //? Output: \path\file.txt

//* checking if a path is absolute
const isabolute = path.isAbsolute("/path/to/file.txt")
console.log(isabolute); //? Output : true

//* checking if path is relative
// const isRelative = path.isRelative("/relative/path/file.txt")
// console.log(isRelative);  //? Error

//* install npm i tmp

//* creating tmp files

const tmp = require("tmp")  //? Call the temp module n create a file as tmp

tmp.file((err,path,fd, cleanupCallback) => {
    if(err) throw err;

    //* use the temp file path
    console.log(path);    //? Output: C:\Users\STUDEN~1\AppData\Local\Temp\tmp-2632-Xh2ULkdrSwHn

    //* clean up the temp file when done
    cleanupCallback();
})
