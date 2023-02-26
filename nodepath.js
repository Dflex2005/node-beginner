const path = require("path");

//basename
console.log(path.basename(__filename));

//file extension
console.log(path.extname(__filename));

//path object
console.log(path.parse(__filename));

// concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'));