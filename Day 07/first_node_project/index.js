const message = "August";

// console.log(global);  //? global object


// console.log(global.message); //? give undi=efined msg, because its belong to index.js not to global object

//console.log(module); //? module object with empty export{}

//module.exports = message;
//console.log(module);  //? Msg is exports in the export object

//* sending multiple values to object

const course = "Full Stack"

module.exports.message = message;
module.exports.course = course;
console.log(module); //? output -->   exports: { message: 'August', course: 'Full Stack' },