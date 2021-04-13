const fs = require("fs");

const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("file saved");
});

// The file system module can be used to create new files and write data into the files. Here, we use the write file method that's provided with the file system module to create the notes.md file and insert the text seen above into it. This is done asynchronously. Note that you can also use the writefile sync function if you wanted to write this file synchronously. 

// For asynchronous, the first arguent is suppling the file path and new file name for ./assets/notes.md. The 2nd argument of writefile is the text to use stored in the variable "md". Use md.trim() to get rid of leading and trailing spaces. The third argument is a callback function that is invoked once notes.md file has been created and the contents of "md" have been written to that file. This function will only take an error as an argument because there's no data to pass back to this callback. If any errors occur, it'll simply throw the errors with the If statement and cause the js to stop processing as well as show that error in the terminal. Finally the console.log will show the file was saved.