#!/usr/bin/env node

const fs = require('fs');
const util = require('util'); // to utilize the promisify function that returns a promise function

//Method 2
//const lstat = util.promisify(fs.lstate);

//Method 3
const {lstate} = fs.promises;

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }
      
});

// Method 1
// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//         if (err) {
//             reject(err);
//         }
//         resolve(stats);
//     })
//     });
// };
