const fs = require("fs");
const os = require('os')

console.log(os.cpus());

fs.writeFileSync("hello.txt", "Hello from Node.js");

fs.writeFile("helloAsync.txt", "Hello from Node.js", (err) => {
  if (err) throw err;
  // console.log("File has been written");
});

const repo = fs.readFileSync("hello.txt", "utf8");
// console.log(repo);

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  // console.log(data);
});

fs.appendFileSync("./hello.txt", `\nHello ${Date.now()} again from Node.js\n`);

fs.cpSync("./hello.txt", "./helloCopy.txt");

fs.unlinkSync("./helloCopy.txt");

// console.log(fs.statSync("./hello.txt"));

fs.mkdirSync("./newDir/nest/moreNest", { recursive: true });