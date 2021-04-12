const waitTime = 3000;
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

// So we have the interval that we've used using set interval on line 22. The interval is set to call the increment time function that we declared on line five every half-second. So every half-second we're going to add to the current time and then calculate our percentage using the current time versus the wait time, which is the total time. Using process standard output we're able to clear the line, move the cursor back to zero, and then overwrite our last percentage with the new value.

// Once the timer has finished on line 15 we declare the timer finished function that clears the interval and then removes the last percentage line so that we can write done in its place. 
