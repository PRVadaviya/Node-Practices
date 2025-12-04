const fs = require("fs");

// CREATE DIRECTORY
fs.mkdirSync("data");

// READ DIRECTORY CONTENTS
console.log(fs.readdirSync("."));

// DELETE DIRECTORY
fs.rmSync("data", { recursive: true, force: true });
