// LIST DIRECTORY FILES

// The fs module is used to do anything you would need to work with files and directories. It can be used to list files in directories, create new files in directories, stream files, watch files, and modify file permissions. The objective here is to list the contents of a directory. Notice the files within this directory. You have the assets directory and inside it are 3 other different types of files. This list.js file is the module that will list the contents of a directory. Note that this file is located on the same level as the assets directory. Line 5 loads the fs module using the require function. Line 7 reads the contents of a directory into a variable by invoking fs.readdirSync() and then supplies the path to the directory to read. If you run this in terminal with "~$ node list" you will see the files within the assets directory listed as an array. The readdirSync function is executing synchronously and so that means that line 7 is blocking all other processes. It makes JavaScript stop everything until the files within that directory are read before processing any more lines of code. Comment out this code block and continue below.

const fs = require("fs");

const files = fs.readdirSync("./assets");

console.log(files);


// To exemplify the synchronous operation here. Lines 16 and 18 with console logs that print out the start and completion were added to the code from above. Uncomment the code block below and run it in terminal. The result will show the first log "started reading files", then the files are being read, and then the log reads "complete" before dumping the file array to the terminal. Comment out this code block and continue below.

// const fs = require("fs");

// console.log("started reading files");
// const files = fs.readdirSync("./assets");
// console.log("complete");

// console.log(files);


// Another way to read files is to make line 17 non-blocking by using an asynchronous function with readdir. Notice the changes made on line 28 below to remove the "const files" variable and the "Sync" portion that was attached to readdir as in line 17. So now on line 28, once the files in the directory are read, they will be passed to a callback function that is now supplied as a 2nd argument that will have 2 other arguments within it. The 1st variable in this callback function will be any errors that have been thrown. The 2nd variable of this callback function will be the actual files. Now when the files are read, the callback function will be invoked using the arrow function. Since this operates asynchronously, lines 18 & 20 (from above) will actually be executed before the files are read and so they need to placed within the new callback function on line 28 in order to print those details to the user when the files are actually read. Therefore they are moved to lines 32 & 33. Any errors that occure will stop the processing of the module. So errors are handled by the callback function with an IF statement to either throw an error, otherwise print the details to the user once the files are read. Run the code now with "~$ node list" in terminal. You will see that the files have started to be read and once they are read a complete message is printed and the read files are dumped in a file array. If you were to move line 27 to the bottom of the code block on line 35, you would have the same result. This is because of the asynchronous operation.

// const fs = require("fs");

// console.log("started reading files");
// fs.readdir("./assets", (err, files) => {
//     if (err) {
//         throw err;
//     }
//     console.log("complete");
//     console.log(files);
// });

// In summary, you see it "started reading files" first and then "complete" in the file array after the files are read. However, notice that the call to read directory was made before printing to the console "started reading files". That's due to the callback function that is going to operate asynchronously and is invoked once successful completion of the reading of the directory. 