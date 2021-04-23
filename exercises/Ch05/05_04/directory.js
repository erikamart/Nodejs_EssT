// DIRECTORY CREATION

// The file system module can also create directories. Here in lines 7-12 a "storage-files" directory is created asynchronously. Line 7 uses fs.mkdir() function to create the directory. The first argument is the name of the directory. The second argument is error function because the callback handler can only accept an error argument. If you run the module once, the directory will populate in your file list. If you run it again, the error will throw telling you that it already exists. If you delete the folder and run the module it will re-create the folder again. But leaving the code this way will not look for an existing folder before trying to create it. Comment out this code block and continue below.

const fs = require("fs");

fs.mkdir("storage-files", err => {
    if (err) {
        throw err;
    }
    console.log("Directory Created.");
});


// The file system has a function that can be used to check for an existing directory first. Looking at lines 19-21 you use an IF/ELSE statement to use the fs.existsSync() function to check for the existing file by it's name. IF the file is found the console will print the message that the directory already exists and the module is stopped since this is a syncrounous process. It will then exit the module. ELSE the module continues to create the file and throw any other errors that could occur as well as print the message that the directory is created when it is.

// const fs = require("fs");

// if (fs.existsSync("storage-files")) {
//     console.log("Directory already exists!");
// } else {
//     fs.mkdir("storage-files", err => {
//         if (err) {
//             throw err;
//         }
//         console.log("Directory Created.");
//     });
// }