//run command in terminal
//npm init -y
//npm install express
//node HelloWorld.js

// 1.HelloWorld

console.log('Hello World!!!')

// command line argumenet
// command :-  node HelloWorld.js Pratik Vadaviya

const argv = process.argv ;

console.log("Argv 1:",argv);       /*Argv 1: [
                                             'D:\\JavaScript\\node.exe',
                                             'C:\\Users\\HP\\OneDrive\\Desktop\\code\\Node JS\\Practice_question\\Environment&Setup\\HelloWorld.js',
                                             'Pratik',
                                             'Vadaviya'
                                             ]*/

//console.log("Argv 1:",argv[2]);    //pratik

//console.log("Argv 1:",argv[3]);    // vadaviya



// ● Access env variables 
// First of all install dependencies

const dotenv = require('dotenv')
dotenv.config();

console.log(process.env.MY_APP);

