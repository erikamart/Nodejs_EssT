// READ FILES

// You can use the "fs" module to read the contents of a file as text or binary. Note that to read binary files you do not supply the "UTF-8" encoding that would be supplied to read text. To read text file you place that encoding as the 2nd argument of the function. To see this example, examine the following code block to read the contents of a file synchronously (a.k.a. is blocking). Line 5 loads the fs module with the require() fuction. Line 7 creates a constant variable that uses the fs.readFileSync() function to read the contents of the Readme.md file located in the assets directory, hence you see the 1st argument of the function as the path to that file. Since the Readme.md file is a file containing text, the 2nd argument of the function is the encoding for text known as "UTF-8". Remember that since this is synchronous, that means that the process will wait until it's read the contents of the entire file before executing more code. Line 9 will log to the console the contents of the text file. Run this module using "~$ node readFile". You should see all of the text within the file in the terminal. Now comment out this code block and continue below.

const fs = require("fs");

const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

console.log(text);


// The asynchronous way of reading files is done with the readFile() function. Line 16 below shows the changes done to line 7 above for this. The name of the variable and the "Sync" portion of the function are removed. Then a callback is incorporated within the function. This means that once the contents of the file have been read, the contents are now passed to a callback function. The 1st variable of the callback function is for errors. If there are no errors then it will be NULL. The 2nd argument of the callback is the text that will be read. Since the text is going to be passed intot he callback this way, line 9 seen above is what is moved to be within the callback as line 18 below. Line 17 is simply an additional consol.log to notify that the file contents has been read. Try running the code block below with "~$ node readFile". You should see the same result as the previous code block except remember that this is done asynchronously rather than synchronously. Now comment out the code block and continue below.

// const fs = require("fs");

// fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
//     console.log("file contents read");
//     console.log(text);
// });


// Now you will see an example of how to read binary files. Binary files are non text files such as image files. Lets read the binary of the image file called "hiddenBlackCat.jpg". You still need to require the fs module using the require() function as seen on line 24. Line 26 changes the file path to specify the image file and also removes the text encoding "UTF-8" since this is not a text file. Finally the 2nd argument of the function and the console.log on line 28 is changed to include an "img" name in the callback rather than the "text" name to have the labels be logical to the user of the code. Try running the code block below. You should see the contents of the file are read into a buffer that is therefore the binary. Comment out the code block and continue below.

// const fs = require("fs");

// fs.readFile("./assets/hiddenBlackCat.jpg", (err, img) => {
//     console.log("file contents read");
//     console.log(img);
// });


// Using the most recent code block, you need to consider how to handle an error if it occurred. Lines 37-40 use an IF statement to console.log that an error occurred with a message. If there was no error then the process will exit. To test the error message function, change the file type of the image file to something that doesn't exist, like .jpeg and run the module. You should see the error message telling you "no such file". If you put it back to the existing image then no error will occur and you should see the binary output.

// const fs = require("fs");

// fs.readFile("./assets/hiddenBlackCat.jpg", (err, img) => {
//     if (err) {
//         console.log(`An error has occured: ${err.message}`);
//         process.exit();
//     }
//     console.log("file contents read");
//     console.log(img);
// });