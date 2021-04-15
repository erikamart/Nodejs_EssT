// THE REQUIRE FUNCTION

// Another thing available globally is the name of the current file and the full path to the current directory. Run lines 4 & 5 in the terrminal with "~$ node global", to see the output. Then comment the lines out and continue to the next section below.

console.log(__dirname);
console.log(__filename);


// ***************************************
// NodeJS has tools that allow editing and manipulation of filepaths. These tools need to be loaded in since they come from a separate module. So also available globally, is the commonJS module pattern, which is used to import other code into files. There is a function called require() that can be used to import and load other modules. Modules are simply other JavaScript files containing code. There are options to load: modules that are installed within NodeJS, modules installed with npm, or modules you created (such as other nodeJS files in the directory structure).

// The path module is a tool that comes with nodeJS and it gives tools that help you work with path strings. Line 14 is creating a variable constant called path and then loads the path module into that variable with the require() function. Line 15 is using the basename() function to grab the filename only from the global __filename variable in the full path and then log() the name into a template string to output. Run the code below in terminal with "~$ node global".

// const path = require("path");
// console.log(`The file name is ${path.basename(__filename)}`);