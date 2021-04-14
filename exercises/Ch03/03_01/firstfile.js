// THE GLOBAL OBJECT

// Log "Hello World" to the console. In terminal, type "node firstfile". You will see that the text was printed to the console. Comment out this code and move on to the next section below.

console.log("Hello World");


// **************
// As you can see from the above, this is simply a JS file. You can use variables because of that. Add JS to the code by creating a variable with some text assigned to it and then log the variable to the console to print the text. Comment out this code and move on to the next section below.

// let hello = "Hello World from nodeJS";
// console.log(hello);


// **************
// The console object is actually part of a global object. Therefore, you could prefix line 12 with global. and get the same output. Try the code below with that change.

// let hello = "Hello World from nodeJS";
// golobal.console.log(hello);

// **************
// Everything on the global object is as you would guess, available globally. Meaning, you can use any of the objects or values available on the object within JS files. Global objects contain all of the objects, values, and methods that can be used in a node.js file without needing to import functionality. Check out the Node.js Docs to see more of the global object at https://nodejs.org.api/globals.html