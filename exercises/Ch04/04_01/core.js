// CORE MODULES

// So far you've been learning what functions are globally available. One of those last used was the require function. This fucntion is what's used to load modules. Many modules are hosted on NPM and delivered by the community. However, the focus now is on those modules that you don't have to install with NPM. These are modules that come with node.js as core modules that are installed with it. 

// The path module is a core module that can be used out of the box. Line 7 uses the require function to load the path module. This module helps with many things, such as print the full path to a file in another folder. Line 9 shows the code that creates a constant variable called "dirUploads". The variable will point to the uploads directory using path.join and __dirname to give the full path to the current directory. The following arguments in the function are referencing the WWW, files, and uploads directories. Line 10 then logs the "dirUploads" to the console. See the result by running in terminal "~$ node core". You should see the full path to the folder that you're in and also reference the WWW, files, uploads directories that were joined together using the path.join function. Comment out the code and continue to the next section below.

const path = require("path");

const dirUploads = path.join(__dirname, "WWW", "files", "uploads");
console.log(dirUploads);


// Another core module is the util module. Line 15 again uses the require function to load the path module. Line 16 also uses the require function to now load the util module. This module has a lot of helper functions but it also has a more powerful console log use. Line 19 uses util.log to take the path module and use the basename function. The arugment in that function will send it the __filename and that will give the current name of the file. This will need to be printed out in the utility log. So line 19 is another utility log that prints a string using a little up-carat to say the name of the current file. Run in the terminal "~$ node core". You should see that the utilities module logs the strings to console like the console.log would but with the utilities module, it also gets the current date and time stamp associated with it. The primary difference between the utilities module and the console log is that you have to require the utilities module. So here on line 16 it has to load the module before it can be used whereas console.log can be used out of the box without loading it. Comment out the code block below and continue to the next section.

// const path = require("path");
// const util = require("util");

// util.log(path.basename(__filename));
// util.log(" ^ The name of the current file");


// The next module to look at is the v8 module. It has a function available called .getHeapStatistics. This allows you to look at memory usage and memory statistics. If you run the below code in terminal you should see the total heap size of the menu, the physical size, available size, the heap size limit, and so forth. Comment out the code block below and continue to the next section.

// const util = require("util");
// const v8 = require("v8");

// util.log(v8.getHeapStatistics());


// Another neat trick in using these functions is that they can actually be destructured out of their modules. For example, looking at util.log from before, line 33 plucks out the log function by destructing only the variable needed instead of naming the full variable util. This also changes line 36 to omit the use of util.log and just make it log. The same goes for v8 on line 34. It uses the GetHeapStatistics function by destructuring it out of that require statement. This makes the overall code look a bit better. However, there are some arguments for or against doing this because you might not necessarily know where the log function is coming from or where the GetHeapStatistics function is coming from, unless you look at all of the require statements. If you try running in terminal the code below you will see that the result is the same as the code block output from above.

// const util = require("util");
// const { log } = require("util");
// const { getHeapStatistics } = require("v8");

// log(getHeapStatistics());