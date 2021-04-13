const fs = require("fs");

// const text = fs.readFileSync("./assets/Readme.md", "UTF-8");
// fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
//     console.log("file contents read");
//     console.log(text);
// });

// console.log(text);

fs.readFile("./assets/hiddenBlackCat.jpg", (err, img) => {
    if (err) {
        console.log(`An error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(img);
});

// *************************
// You can read text or binary files here. To read binary files you do not supply the encoding that would be supplied to read text.
// Uncomment lines 3 & 9 while commenting all the rest to see that readFileSync is blocking code.
// Uncomment lines 4-7 while commenting all the rest to see the asynchronous way to read text in files.
// To read binary files, uncomment lines 11-18 while commenting all the rest. This will output binary for an image file. You remove the "UTF-8" encoding argument because image files are not encoded with that. To test the error message function, change the file type of the image file to something that doesn't exist, like .jpeg. When there is no error you will see the contents of a binary file into a node JS type called the buffer.