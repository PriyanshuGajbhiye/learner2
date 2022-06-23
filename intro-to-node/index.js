//jshint esversion: 6
//The above line turns off the warning that shows const is only available in ES6

const fs = require('node:fs');

fs.copyFileSync("file1.txt","file2.txt");

/*The above command will copy the content of source file to destination file if destination file does not exist it will create it and then
copy the content and if already exists it's content will be replaced by the source file content*/
