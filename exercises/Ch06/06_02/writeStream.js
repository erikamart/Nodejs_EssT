// WRITABLE FILE STREAMS

// The process.stdout object is a writeable file stream. Run the code block below to see the result. "~$ node writeStream". You can also use the same interface to write a file; comment out lines 5-6 and see below for detail.

process.stdout.write("hello");
process.stdout.write(" world\n");


// ********************************
// You can create writeable file streams using the fs.createWriteStream() method. In line 13, the 1st argument is the file path of where to write the file. The 2nd argument will create a writeable stream using UTF-8 encoding. Now you can use this writeable file stream "writeStream" just like process standard output, "process.stdout.write". Notice the changes between lines 5-6 above and lines 15-16 below. Note that the directory "./assets" currently does not have the file named "myFile.txt". This file will be created after running this module. Run the code block below in terminal with "~$ node writeStream". Open the newly created file "myFile.txt" and find that "hello world" is written in. Comment out this code block and continue to the next section below.

// const fs = require("fs");
// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

// writeStream.write("hello");
// writeStream.write(" world\n");


// ********************************
// Readable streams are made to work with writeable streams. For an example on using writeStream, lets use the process.stdin readable stream to listen for data events from the terminal; see lines 25-27. Run this in the terminal with "~$ node writeStream". You'll see the terminal start listening. Type in anything you want and then open the text file "myFile.txt". You will see everything you typed in that file now! WriteStream was used to write to the file. Comment out this code block and continue to the next section below.

// const fs = require("fs");
// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");

// process.stdin.on("data", data => {
//     writeStream.write(data);
// });


// ********************************
// Again, readable streams are made to work with writeable streams. You can use both to read from a file and write to another file too; i.e. copy. Now lets create a readStream with fs.createReadStream() to read the lorum-ipsum.md file; see line 35. Remember this is exactly what was done in exercise 06_01. Note the change also done on line 37. The code below shows that instead of using process.stdin, we use readStream to read data from the specified readStream file and then use writeStream to write that data (or copy it) to the new file, "myFile.txt". Run the code below and open the "myFile.txt" file to see. Comment out this code block and continue to the next section below.

// const fs = require("fs");
// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
// const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// readStream.on("data", data => {
//     writeStream.write(data);
// });


// ********************************
// Since readable streams are made to work with writeable streams, they have a lot of methods that help compose them. For instance, we can take the process.stdin, which is a readable stream, and .pipe it to a writeStream. That writeStream then sends it to the writeStream which will write it to the "myFile.txt" file. Run the code below and type in a few lines of words. Then open the "myFile.txt" file and you will see what you typed in the terminal copied directly into the file. Comment out this code block and continue to the next section below.

// const fs = require("fs");
// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
// const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// process.stdin.pipe(writeStream);


// ********************************
// The writeable stream is the counterpart to the readable stream. Still considering the section above, lets take the readStream (the "lorum-ipsum.md" file) and pipe it to the writeStream (the "myFile.txt" file). This will essentially overwrite the "myFile.txt" file with the data from the "lorum-ipsum.md" file. Note that the only difference in code from the section above is on line 59.

// const fs = require("fs");
// const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
// const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// readStream.pipe(writeStream);