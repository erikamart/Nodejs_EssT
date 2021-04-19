// EXPORT CUSTOM MODULES

// You may have gathered that every nodeJS JavaScript file is it's own module. So far, you have been loading modules using the require() function. This function is part of the common JS module pattern, but it is only the half of a full pattern that loads modules. The other half of the pattern is the module.exports mechanism that is used to export data and functionality from a module. Line 5 below is using module.exports to export a string. Line 3 in the app.js file is then used to consume this file with the require() function. Open that file to see the consuming code. Make sure line 5 here is the only uncommented line.

module.exports = "NodeJS";


// Comment out the code above and continue here. To summarize the previous example, the require function invoked on line 5 of the apps.js file is what exports the value of module.exports on line 5 of this file. As a next example consider the code below. It is a count module with a function that will return the value of the count. Line 10 declares a variable called "count" and initiates it to zero. Lines 12-13 declare increment and decrement variables that are set to do those actions respectively to the count variable. Know that within every Javascript file, all the variables are scoped to that module. Therefore, files that consume this module don't have access to the count. Therefore, that is why you need line 15 to return the current value of the count. Lines 17-21 uses the module.exports to export all the functions together in an object. Module.exports allows the export of any JavaScript type. Curly brackets are used to specify objects. Uncomment the block of code below, save this file, and open the app.js file to continue with the consuming module portion for this.

// let count = 0;

// const inc = () => ++count;
// const dec = () => --count;

// const getCount = () => count;

// module.exports = {
//     inc,
//     dec,
//     getCount
// };
