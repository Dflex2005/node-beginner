
const os = require("os");

// // Platform
// console.log(os.platform());

// // Cpu arch
// console.log(os.arch());

// // cpu core info
// console.log(os.cpus());

// // free memory
// console.log(os.freemem());

// //Total memory
// console.log(os.totalmem());

const diff = os.uptime();

console.log(diff);

let s = 1;
let m = s*60;
let h = m*60;
let d = h*24;

// real time
const tday = Math.floor(diff/d);
const thours = Math.floor((diff % d) /h)
 const tmins = Math.floor((diff % h)/ m);
const tsecs = Math.floor((diff % m)/ s);

console.log(tday);

console.log(`this laptop uptime is ${tmins} minutes & ${tsecs} secs`);

