#!/usr/bin/env node

const fs = require('fs');

// don't need to use require statement for "process" as it's one of the few alr built-in within nodeJS
fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }
    // BAD CODE HERE!!!
    /*
    for (let filename of filenames) {
        fs.lstat(filename, (err, stats) => {
            if (err) {
                console.log(err);
            } 
            console.log(filename, stats.isFile());
        });
    }
    */
    // BAD CODE COMPLETE
    // Asynchronous functions cause the filenames to be printed in random orders

});