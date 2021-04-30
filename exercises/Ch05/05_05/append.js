// APPEND FILES

// Here we are using the FS module to append files. Line 8 creates a variable called "colorData" and imports the data from the colors.json file by requiring it. Line 10 specifies that this variable import the object data from "colorList" (found in the colors.json file that is an array of colors) to loop through each color in it's array using the forEach function. Then it will send a callback function to the forEach function called "c" to set "c" to a different color every time it iterates through the loop. Lines 8 and 10-16 is to append those looped colors. The first argumrent is to specify the folder called "storage-files" and create a new file inside that directory called "colors.md". Note: "colors.md" shouldn't exist yet and should be deleted to test this. The 2nd argument is how the color is appended using back-ticks around the object values. So, c.color, will give the color name like red, green, blue. Then c.hex will give the hex value followed by a new line. The 3rd argument is a callback that will be called once the append is complete. If there are errors they will be passed to the callback and thrown.

// If you run this module in terminal with "~$ node append" a couple times you will see that the file initially created will still be there and just have the data appended within it below the last time the module ran. It will continually append the data onto the last set of data for as many times as you run it.

const fs = require("fs");
const colorData = require("./assets/colors.json");

colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});
