// REPORT PROGRESS WITH setInterval

// To improve upon the code written in the previous chapter, you can report the waiting time as a percentage. Within the increment time function on lines 9-15, you see line 11. This line calculates a percentage by declaring a constant variable called "p" and then assigning it to the calculation that uses the math.floor() function. You use this function because the resulting number will be a decimal value and this helps give a percentage by trimming off the decimal part of the number. Then line 12 uses process.stdout to clear the last line written to the terminal. Line 13 will move the cursor back to the start position of the terminal. Note that lines 21 & 22 in the timerFinished function will also utilize these functions to do the same. Line 14 is the resulting output message that gives the percentage.

const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);

// In summary, the code uses set interval on line 26. The interval is set to call the increment time function declared on line 9 for every half-second. Every half-second it is going to add to the current time and then calculate the percentage using the current time versus the wait time, which is the total time. Using process standard output you are able to clear the line, move the cursor back to zero, and then overwrite the last percentage with the new value.

// Once the timer has finished on line 19 you declare the timer finished function that clears the interval and then removes the last percentage line so that it can write done in its place. 
