const fs = require("fs");

// console.log("started reading files");
// const files = fs.readdirSync("./assets");
fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    console.log("complete");
    console.log(files);
});

console.log("started reading files");

// The below is part of the synchronous example, comment out lines 5-13 and uncomment lines 3, 4, 16, 17 to see it by running ~$ node list in terminal.
// console.log("complete");
// console.log(files);

// *********************************
// The objective here is to list the contents of a directory. The fs module is used to do anything you would need to work with files and directories. It can be used to list files in directories, create new files in directories, stream files, watch files, and modify file permissions.
// The readdirSync function is executing synchronously and so that means that line 4 is blocking all other processes. It makes JavaScript stop everything until the files within that directory are read before processing any more lines of code.
// Lines 3 & 16 are just to show that the process started reading files and completed reading them before dumping the file array to the terminal.

// Lines 5-13 are an example of an asynchronous function that is for non-blocking processes. readdir will read the files within the directory, but it doesn't set a variable and that's why the const and variable name are taken off (unlike the syncronous function). Once the files within the directory are read they are passed to a callback function that is supplied as the second argument (i.e. (err, files)). The first variable of this callback function is any errors that could be thrown or "err". The second variable are the "files" themselves. Hence you see the little arrow function that gives the callback function instructions. So when the files are read, the callback function will be invoked. Because this operates asynchronously, lines 9 and 10 are placed within the callback function since they will actually be executed before the files are read. The last thing is to handle any errors that might have occurred asynchronously. This is done by checking the error variable using an If statement. It will throw the error to stop the processing of the whole module if an error occurs. Finally, line 13 is copied from line 3 to move it to the bottom of the whole process to exemplify that it won't matter what line it is located on since this is an asynchronous operation that will operate the same regardless of it's location.

// In summary, you see it "started reading files" first and then "complete" in the file array after the files are read. However, notice that the call to read directory was made before printing to the console "started reading files". That's due to the callback function that is going to operate asynchronously and is invoked once successful completion of the reading of the directory. 