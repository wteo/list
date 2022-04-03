#!/usr/bin/env node

const fs = require('fs');
const util = require('util'); // to utilize the promisify function that returns a promise function

//Method 2
//const lstat = util.promisify(fs.lstat);

//Method 3
//const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        console.log(err);
    }

    for (let filename of filenames) {
        try {
            const stats = await lstat(filename);
            console.log(filename, stats.isFile());
        } catch (err) {
            console.log(err);
        }
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

// This is still not an ideal approach. Everything is running in a sequential.
// Hence, it will be slow when you're working with a huge data.
