// Start this lesson with opening and reading from myModule.js first.

// Lines 5-6 in this file correlates with line 5 in the myModule.js file and should be the only lines uncommented to run the app module. When using the require function here, you specify the path to the module because this is how you load modules that you created within the same file system. However, you don't have to provide the path when you import core Node.js modules or when you import modules that you've installed with NPM. Now try running the module in terminal with "~$ node app". The result should have logged "NodeJS" to the console. Now comment out this code block and continue reading the next section in the myModule.js file.

const name = require("./myModule");
console.log(name);


// This is the second example that is used with the counter module in the second part of the myModule.js file. Make sure the code above this is commented out. Here, line 11 is creating a constant variable called "counter" and requiring the available module within the file myModule.js for it. Lines 13-15 use the functions created in the other file as well for counter. Line 18 logs the counter value. Now run this in terminal with "~$ node app". The result will show that the count was incremented three times it was possible to use the getCount() function to return that variable because the count itself is scoped in the myModule.js file. Comment out this code block and continue to the section below.

// const counter = require("./myModule");

// counter.inc();
// counter.inc();
// counter.inc();

// console.log(counter.getCount());


// Another way to make the code in lines 11-17 look nicer is to destructure the functions when the require function is invoked. So instead of setting all the fucntions to an object called "counter", you can destructure by listing what's needed. This is shown on line 22 within curly braces. The variable "counter" is removed from all instances of it's previous use. Now because of that, there's no need to prefix all the functions with "counter." as is seen in lines 24-29. If you uncomment this code and run it the same as before, you will see it still works fine, except now the number is 2 because the decrement function was used here.

// const { inc, dec, getCount } = require("./myModule");

// inc();
// inc();
// inc();
// dec();

// console.log(getCount());

// The Node.js module system allows separation of it's functionality into separate files. That functionality is consumed with the require function and what gets returned by the require function is what's been exported with the module.exports function. Looking at myModule.js. notice that the increment, decrement, and getCount functions are being exported here and they are imported with the require function to the app.js file.