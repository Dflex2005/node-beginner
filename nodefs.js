const fs = require('fs');
const path = require('path')

// create folder
// fs.mkdir(path.join(__dirname, "/test"),{}, err =>{
//     if(err) throw err;
//     console.log('folder created');
// })

// // create and write to file
// fs.writeFile(path.join(__dirname, "/test", "hello.html"),"<h1>hello</h1>", err =>{
//     if(err) throw err;
//     console.log('file created');

//     fs.appendFile(path.join(__dirname, "/test", "hello.html"),"<p>hello</p>", err =>{
//         if(err) throw err;
//         console.log('file created');
//     })
// })

//Read file
fs.readFile(path.join(__dirname, "/test", "hello.html"), "utf8", (err, data) =>{
    if(err) throw err;
    console.log(data);
})

// Rename file
fs.rename(path.join(__dirname, "/test", "hello.html"), path.join(__dirname, "/test", "hello2.html") , (err) =>{
    if(err) throw err;
    console.log('file renamed');
})