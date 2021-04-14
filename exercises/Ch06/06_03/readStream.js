// READABLE FILE STREAMS
// Stream interface provides the technique to read and write data to files. It can also commmunicate with the internet and communicate with other processes. You've been using it this whole time in the terminal when you read and write data.

// The code in lines 6-9 is using the process standard input to listen to data events on the terminal. If you run this in terminal with "~$ node readStream", you will see what happens as you input text. It counts the number of characters you typed. The process.stdin object is a readable file stream. Comment this code block out before continuing below.

// console.log("type something...");
// process.stdin.on("data", data => {
//     console.log(`I read ${data.length - 1} characters of text`);
// });


// ***************************************************
// The file system (fs) also has ways to create readable streams. To try this method, uncomment lines 15, 16, 20, 21, 22, 24 only and run "~$ node readStream". This is an asycnronous readStream function. On line 16, the first argument is the path to the file that should be read; in the assets folder there's a lorum-ipsum.md file. This is a huge text file with lorum-ipsum text. The 2nd argument creates a binary read stream or a text read stream. So since we want a text read stream, you would pass the encoding UTF-8. Running this block of code with "~$ node readStream", will show a total count of the characters read from the lorum-ipsum.md file. However, this takes a lot of memory in teh nodejs application. To prevent this, you should read the file in chunks to use less memory. This way it will not load everything into a buffer, but instead read a chunk at a time. Leave the lines uncommented and see below for further detail.

const fs = require("fs");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileTxt = "";

console.log("type something...");
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text`);
    fileTxt += data;
});

readStream.once("data", data => {
    console.log(data);
});

readStream.on("end", () => {
    console.log("finished reading file");
    console.log(`In total I read ${fileTxt.length - 1} characters of text`);
});

// To readStream in chunks, it is best to wire up handlers to listen for data events. Lines 26-28 is a data event using .once(). If you uncomment those lines and run the module again (make sure lines 18, 23, 30-33 are commented out), you will see that every data event is still being raised and still reading all of the chunks of data with the handler created on lines 21, 22, 24, but it is now also reading out the first bit of data from within the lorum-ipsum text file.

// You can add a lot of events to listen for data as it is being read and collect all of these little bits of data in each data event. To show this, line 18 is where the variable called "fileTxt" is created and assigned to be an empty string. Then its added at the end of the two readStream data events on lines 23 and 32 to add up all the data chunks as they are read. Streams also have an "end" event. You can use the "end" event to know that the readStream has completed. Uncomment lines 18, 23, 30-33 and run the whole module to see the result. You will find that everything as before reads out the same, but now it gives notice that the reading was done along with a total of characters of text read.