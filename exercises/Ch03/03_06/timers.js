// CREATING A DELAY WITH setTimeout

// Timing functions are also asynchronous functions. There is  set timeout, clear timeout, set interval, and clear interval. They work the same way they do in the browser and are available globally. Create a 3 second delay using the setTimeout function. Line 5 is a new constant variable assigned to 3000ms which is equivalent to 3s. Line 6 uses the console log to output a message using a template string in backticks. The string contains the waitTime function divided by 1000 to convert the miliseconds to seconds so it will be able to show the number of seconds that the user is waiting for. Line 8 is a one line arrow function that, once invoked, will log the word "done" to signal the timer is finished. Line 10 is the setTimeout function with a 1st argument that is the function to invoke the timerFinished variable on line 8. It's 2nd argument is the function that invokes the time to wait for this delay, or line 5. Test this code in the terminal with "~$ node timers". You should see this process run asynchronously for three seconds. Once it has waited for three seconds, the timer finished function will be invoked and the word "done" should be logged to the console before it exits the terminal. 

const waitTime = 3000;
console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => console.log("done");

setTimeout(timerFinished, waitTime);
