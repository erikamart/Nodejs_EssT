// RENAME AND REMOVE DIRECTORIES

// Using the fs module to rename a directory. In line 6, the 1st argument is the file path to the existing directory. The 2nd argument is the file path to the replacement name of the directory. Uncomment this block and comment all other blocks to test.

const fs = require("fs");
fs.renameSync("./storage-files", "./storage");


// *************************
// To remove a directory using the asynchronous version of the function called "rmdir()". In line 13, the 1st argument is the name of the directory. The 2nd argument is the error callback function that uses an IF statement to throw an error if it occurs. Otherwise, the console will write out that the directory was removed. If you try this now, you will get an error that the directory is not empty. You can only remove empty directories!

// const fs = require("fs");
// fs.rmdir("./storage", err => {
//     if (err) {
//         throw err;
//     }
//     console.log("./storage directory removed");
// });


// *************************
// There is a way to check to see if the directory is empty first and then remove the files using the synchronous version of the fs.readdirSync(). In line 25, it is using fs.readdirSync() to read the directory and has ./storage as the target directory to read. This gives an array of the file names within the directory. You can chain a .forEach() to this, to loop through each item of that array which will each be a string we will call "fileName". So then in the callback function to handle each "fileName" iterated, fs.unlinkSync() is applied to remove every file, as seen in line 26. Now we can continue with what was originally built on Lines 12-18 above to remove the directory. This is copied again below on lines 29-34 to run this example as a whole block of code. Uncomment this block and comment all other blocks to test. Run in terminal with "~$ node directories". NOTE: Now is a good time to save a copy of the directory "storage-files" so you'll be able to duplicate these tests later. Also, if you did not run the 1st block of code above already, you should now before running this block to ensure that the directory called "storage-files" is renamed to "storage". Otherwise this example will have an error "no such file or directory, scandir './storage'...". You can alternatively just rename the directory in the code accordingly, but where's the learning in that?

// const fs = require("fs");
// fs.readdirSync("./storage").forEach(fileName => {
//     fs.unlinkSync(`./storage/${fileName}`);
// });

// fs.rmdir("./storage", err => {
//     if (err) {
//         throw err;
//     }
//     console.log("./storage directory removed");
// });