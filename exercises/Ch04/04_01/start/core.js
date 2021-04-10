const path = require("path");
const util = require("util");
const v8 = require("v8");
// const dirUploads = path.join(__dirname, "WWW", "files", "uploads");
// console.log(dirUploads);

// util.log(path.basename(__filename));
// util.log(" ^ The name of the current file");

util.log(v8.getHeapStatistics());

// The primary difference between the utilities module and the console log is that we had to require the utilities modules. So here on line two we had to load the module before we can use it and console log we can use out of the box.



// All of these functions that we want to use can actually be destructured out of their modules. So, for instance, we're using util.log. Well if I came up here and, instead of naming the full variable util, I can just pluck out the log function by destructuring only the variable that I need. The same is true for v8. If I only wanted to use the GetHeapStatistics function I could do so by destructuring it out of that require statement. So then it might make my code look a little bit better. See below that it is equivalent to lines 2,3,10.

// const { log } = require("util");
// const { getHeapStatistics } = require("v8");

// log(getHeapStatistics());