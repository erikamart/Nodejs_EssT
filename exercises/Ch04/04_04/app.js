const { inc, dec, getCount } = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount());

// The Node.js module system allows separation of the functionality into separate files. You consume that functionality with the require function, and what gets returned by the require function is what you've exported with the module.exports function. Looking at myModule.js. notice that the increment, decrement, and getCount function are being exported here and they are imported with the require function to the app.js file.