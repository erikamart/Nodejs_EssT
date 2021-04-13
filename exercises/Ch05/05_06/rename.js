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


// The file system module has methods to move, rename, or remove a file too. The rename method also has versions for both synchronous and asynchronous use. Here there are three file operations. One, to rename the colors.json to colorData.json. Two, to move the notes.md into the storage-files folder. Three, to wait four seconds and delete the .jpg file. 

// On line 3 it is used synchronously. The 1st argument is the file path to the colors.json file. The 2nd argument is file path that uses the new name to replace the previous one from argument 1.

// Lines 5-9 is the asynchronous version to move a file. The 1st argument is the path to the location of the file called "notes.md". The 2nd argument is the path to move the file into the "storage-files" directory. The 3rd argument is the callback for any errors.

// Lines 11-13 is to setTimeout. The 1st argument is the file path to remove a file using fs.unlink. Unlink has both version of syncronous and async, but here it is using sync to remove the file named "hiddenBlackCat.jpg". The 2nd argument is to setTimeout for 4000 milliseconds or essentially 4 seconds to wait that long before removing the file. 
