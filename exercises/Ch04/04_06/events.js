// CUSTOM EVENTS WITH THE eventEmitter

// The Event Emitter is a powerful tool that comes with Node.js. It gives a way to raise custom events that can be wired with listeners or handlers to use on those events. Line 5 loads the "events" module with the require() function. Line 7 creates an instance of the event emitter. The "events" module comes with an "event emitter" constructor that constructs a new instance of the event emitter that is used to raise custom events. Line 13 uses the emitters event function to raise a custom event. The 1st argument in it takes the string name of the event. Events can be named anything that makes sense to the user. In this case the name is called "customEvent". The next set of arguments is the data that needs to pass to the handler of the custom event. Here it is terms "Hello World" and "Computer". Note that events can be raised anywhere wanted, therefore, another one is made on line 14 for fun. After events are raised, the next thing to do is handle them. Lines 9-11 do this. It is using the emitters .on() function to wire up a handler or a function to handle the events. Here it is handled with a callback function and within this arrow function it will take in the argument. The 1st argument of that callback function happens to be the 2nd argument of the emit function ("Hello World" & "That's neat!"), therefore you can call that the "message". The 2nd argument of the callback function will be the 3rd argument of the emit function, therefore that can be called the "user". So the "message" & "user" are what will be passed to the callback handler. They will be handled by logging "user": "message to the console as seen on line 10. Run this in terminal with "~$ node events". The result should be the console logging the string data called upon. Now comment out this code block and continue below.

const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's neat!", "Monkey");


// Another feature of the events emitter is that events are asynchronous, meaning that they are raised when they happen. Here is an example of how to listen for the user input from the terminal. You would use the process.stdin.on() function to recieve data passed in to a callback function so that when the user types anything it is collected in a new variable called "input" where the data is converted to a string and trimmed so that an event emitter can fire a custom event. Lines 27-34 shows this. Lines 29-32 is and IF statement that will exit the application if the user types that word and fire a custom event to say goodbye. Try this now in terminal.

// const events = require("events");

// const emitter = new events.EventEmitter();

// emitter.on("customEvent", (message, user) => {
//     console.log(`${user}: ${message}`);
// });

// process.stdin.on("data", data => {
//     const input = data.toString().trim();
//     if (input === "exit") {
//         emitter.emit("customEvent", "Goodbye!", "process");
//         process.exit();
//     }
//     emitter.emit("customEvent", input, "terminal");
// });

// Every time lines 30 or 33 are hit, a custom event is raised and data is passed to that event. On line 23, it handles all custom events with the "on" function by retrieving the data that was passed to that event and with the callback function. This example just displays the data to the user in the terminal.