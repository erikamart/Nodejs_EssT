// RENAME AND REMOVE FILES

// The file system module has methods to move, rename, or remove a file too. The rename method also has versions for both synchronous and asynchronous use. Here, there are three file operations. The 1st is to rename the colors.json file to colorData.json. The 2nd is to move the notes.md into the "storage-files" directory. The 3rd is to wait 4 seconds and delete the .jpg file. On line 7 the fs.renameSync() function is used for a synchronous process. It's 1st argument is the file path to the colors.json file. The 2nd argument is the file path that uses the new name to replace the previous one from argument 1. Lines 9-13 is the asynchronous version of the fs.rename() function to move a file. It's 1st argument is the file path to the location of the file called "notes.md". It's 2nd argument is the file path to move the file into the "storage-files" directory. It's 3rd argument is the callback for any errors. Lines 15-17 is using the setTimeout() function to create a time delay. The 1st argument is the file path to remove a file using fs.unlink. Unlink has both version of syncronous and async, but here it is using sync to remove the file named "hiddenBlackCat.jpg". The 2nd argument is to setTimeout for 4000 milliseconds or 4 seconds to wait that long before removing the file. 

const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

fs.rename("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync("./assets/hiddenBlackCat.jpg");
}, 4000);
