#!/usr/bin/env node

const fs = require('fs');

// don't need to use require statement for "process" as it's one of the few alr built-in within nodeJS
fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }
    
    const allStats = Array(filenames.length).fill(null);
    // Array() constructor is used to create Array objects. 
    // When a single or more parameter is passed, the value in these parameters become an array.
    // Array("Apple","Orange") // ["Apple","Orange"]
    // Array(1,2,3) // [1,2,3]
    // The exception is when you pass a number in a single parameter. 
    // The amount of empty elements will be printed instead based on the number given.
    // If you pass 2 in the paramenter, two elements will be printed in the array.
    // i.e Array(2) // [empty, empty]

    for (let filename of filenames) {
        const index = filenames.indexOf(filename); 
        // to find the index no of each element in filename array.

        fs.lstat(filename, (err, stats) => {
            if (err) {
                console.log(err);
            } 
            allStats[index] = stats; // so we use the index to fill in the empty elements in allStats array in the same order. 

            const ready = allStats.every((stats) => {
                return stats;
            });

            if (ready) {
                allStats.forEach((stats, index) => {
                    console.log(filenames[index], stats.isFile());
                })
            }
        });
    }
  
});