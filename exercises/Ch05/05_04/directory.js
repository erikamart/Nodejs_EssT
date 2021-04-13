const fs = require("fs");

if (fs.existsSync("storage-files")) {
    console.log("Directory already exists!");
} else {
    fs.mkdir("storage-files", err => {
        if (err) {
            throw err;
        }
        console.log("Directory Created.");
    });
}

// fs.mkdir("storage-files", err => {
//     if (err) {
//         throw err;
//     }
//     console.log("Directory Created.");
// });

// You can create directories with the fs module. Here in lines 14-19 a "storage-files" directory is created asynchronously by using fs.mkdir. The first argument is the name of the directory. The second argument is error function because the callback handler can only accept an error argument. The module has already been run once and that is why you see the storage-files folder. If you run it again, the error will throw to tell you it already exists. If you delete the folder and run the module with ~$ node directory it will re-create the folder again.

// The file system has a function that can be used to check for an existing directory first. Looking at lines 3-12 you use an If Else statement with a copy of lines 14-19 within the else statement.