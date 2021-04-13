const fs = require("fs");

// fs.renameSync("./storage-files", "./storage");


// fs.rmdir("./storage", err => {
//     if (err) {
//         throw err;
//     }
//     console.log("./storage directory removed");
// });


fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
    console.log("./storage directory removed");
});

// *************************
// Line 3 alone is using the fs module to rename a directory. The 1st argument is the file path to the existing directory. The 2nd argument is the file path to the replacement name of the directory.

//  Lines 5-10 is to remove a directory using the asynchronous version of the function called "rmdir()". The 1st argument is the name of the directory. The 2nd argument is the error callback function that throws an error if it occurs. Otherwise the console will write out that the directory was removed. If you used this you will get an error that the directory is not empty. It must be empty to remove it.

// Lines 12-14 is using the synchronous version of the fs.readdirSync() to read the directory, ./storage, and give an array of the file names within it. Then it chains a forEach, to loop through each item of the array which will be a string fileName. So then there is a callback function to handle each fileName looped through to apply fs.unlinkSync to remove every file. After this we continue with what was originally built on Lines 5-10 to remove the directory. This is copied on lines 16-21.

