// INCORPORATE setInterval

// Using the same code from the previous chaper, you can improve this application by using the set interval function to run an interval that intermittently reports on how long the user has waited. Line 6 below, is a constant variable that is assigned for half a second long, or 500 milliseconds. Line 7 creates a variable that is set to the current time which will equal zero. Note: most of the constant variables are declared as such because those are values that users should not be able to change. Regular variables are the type that can be changed; hence any variable declared with "let". Lines 9-12 is another function to declare the increment time function. It uses an arrow function with brackets to enclose the several lines of code that will take the current time and increment it by the wait interval. Line 11 will also add a log to the console to print the waiting time in seconds. The waiting time is calculated by the current time divided by 1000 seconds. Next is to add a set interval as seen on line 21. This is very similar to the set timeout function on line 22. So on line 21, the 1st argument is a function and the 2nd argument is the time that the interval should wait (waitInterval). This line will call the increment time function every half second repeatedly. Meaning, it won't stop unless you clear this process. To do this, you have already declared the constant variable called interval, but now you need to invoke it in a function to clear it. This is done in the timerFinished function on Lines 16-19. Line 17 invokes the interval to clear it before line 18 prints out that the timer is done. Test this now in terminal with "~$ node timers". You should see a three-second delay, the waiting messages, and also notice that when it is done the interval is cleared so it stops ticking. Since it stopped ticking the application exits.

const waitTime = 3000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval
    console.log(`waiting ${currentTime / 1000} seconds`);
};

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    console.log("done");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
