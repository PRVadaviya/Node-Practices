const fs = require('fs')

//COPY

//async
fs.copyFile("file1.txt", "file2.txt", (err) => {
  if (err) {
    console.log("Error copying file", err);
  } else {
    console.log("File Copied Successfully");
  }
});

//sync
fs.copyFileSync("file3.txt", "file4.txt");
console.log("File Copied Successfully");



//RENAME

fs.rename();
fs.renameSync();


//DELETE

fs.unlink();
fs.unlinkSync();
