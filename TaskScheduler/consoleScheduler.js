const readline = require('readline');

const fs =require('fs');

const FilePath = "./tasks.json";
let activeTasks =[];
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const styleSystem= "\x1b[36m%s\x1b[0m";
const styleTask= "\x1b[33m%s\x1b[0m";
const styleSucess= "\x1b[32m%s\x1b[0m";
