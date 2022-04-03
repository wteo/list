#!/usr/bin/env node

import fs from "fs";
import util from "util";
import chalk from "chalk";
import path from "path";

//Method 2
//const lstat = util.promisify(fs.lstat);

//Method 3
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        console.log(err);
    }
    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);
        
        if (stats.isFile()) {
            console.log(filenames[index]);
        } else {
            console.log(chalk.red(filenames[index]));
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
