const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

// emitter.emit("customEvent", "Hellow World", "Computer");
// emitter.emit("customEvent", "That's pretty cool huh?", "Alex");

// Here's an example on how to listen to user input from the terminal
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});

// The Event Emitter gives a way to raise custom events that we can wire listeners or handlers to using the on function.

// Every time lines 15 or 12 are hit, a custom event is raised and data is passed to that event. On line 5, it handles all custom events by using the "on" function, retrieving the data that was passed to that event, and the callback function. In this case it's just displaying the data to the user in the terminal.