const {stdin} = require("process")
const readline = require("readline")
const reader =readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)
console.log("I am writing an application")
reader.close()