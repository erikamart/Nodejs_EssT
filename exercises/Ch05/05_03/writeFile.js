//  WRITE AND APPEND FILES

// The file system module can be used to create new files and write data to them with the write file method. Line 5 loads the "fs" module with the require() function. Lines 7-16 creates a constant variable called "md" that is loaded with some text to write. Markdown is used with a template string to honor white space. Then lines 18-23 use fs.writeFile(), which is asynchronous but the syncronous version is available, to write to a new file called "notes.md" that will be created in the assets directory. The 1st argument of this function is the file path to where the file will be saved. The 2nd argument will take the markdown and trim it to get rid of leading and trailing spaces. The 3rd argument is a callback function for an error that is invoked once the "notes.md" file has been created and the contents of the markdown have been written to that file. This 3rd function will only take in an error as an argument because there is no data to pass back. So if an error occurs it is handled by throwing the error and will cause nodeJS to stop processing. If there is no error then the process continues and the consol.log on line 22 will output that the file has been saved. Run the code in terminal with ~$ node writeFile". You should see in the console that the file was saved and be able to see the new file created in the assets folder with the text that was written in the code.

const fs = require("fs");

const md = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("file saved");
});
