#! /usr/bin/env node
import inquirer from "inquirer";
// asking first question from the user
let firstQues = await inquirer.prompt([
    {
        name: "first",
        message: "ENTER YOUR NAME",
        type: "input"
    }
]);
const id = Math.floor(Math.random() * 20000);
console.log(`STUDENT ${firstQues.first} IS REGISTERED WITH ${id}.`);
let secondQues = await inquirer.prompt([
    {
        name: "second",
        message: "PLEASE SELECT THE COURSE FROM THE LIST",
        type: "list",
        choices: ["WEB DEVELOPMENT", "CYBER SECURITY", "MACHINE LEARNING", "DATA SCIENCE", "PHYTHON PROGRAMMING", "DOCKERS OR KUBERNETEES"]
    },
]);
let thirdQues = await inquirer.prompt([
    {
        name: "third",
        message: "DO YOU WANT TO ADD OTHER COURSES?",
        type: "list",
        choices: ["YES", "NO"],
    }
]);
let forthQues = await inquirer.prompt([
    {
        name: "forth",
        message: "PLEASE ADD YOUR COURSE",
        type: "list",
        choices: ["WEB DEVELOPMENT", "CYBER SECURITY", "MACHINE LEARNING", "DATA SCIENCE", "PHYTHON PROGRAMMING", "DOCKERS OR KUBERNETEES"]
    }
]);
if (thirdQues.third === "NO") {
    console.log("NO NEW COURSE IS ADDED");
}
else {
    console.log(`YOUR CURRENT COURSES ARE "${secondQues.second}" | "${forthQues.forth}"`);
}
let balance = 20000;
let one = 100;
let two = 2000;
let three = 500;
let four = 1000;
let seventhQues = await inquirer.prompt([
    {
        name: "seventh",
        message: "PLEASE SELECT",
        type: "list",
        choices: ["PAYFEES", "CHECK CURRENT BALANCE"]
    }
]);
if (seventhQues.seventh === "PAYFEES") {
    let eighthQues = await inquirer.prompt([
        {
            name: "eight",
            message: "PLEASE SELECT THE NAME OF THE COURSE WHICH YOU WANT TO PAY THE FEE",
            type: "list",
            choices: ["WEB DEVELOPMENT '100$'", "CYBER SECURITY '100$'", "MACHINE LEARNING' 2000$'", "DATA SCIENCE '1000$'", "PHYTHON PROGRAMMING '100$'", "DOCKERS OR KUBERNETEES '500$'"]
        },
    ]);
    if (eighthQues.eight === "WEB DEVELOPMENT '100$'") {
        console.log(`YOU SUCESSFULLY PAID THE FEES OF COURSE ${eighthQues.eight} `);
        balance -= one;
        console.log(`DEAR CUSTOMER YOUR CURRENT BALANCE IS ${balance} `);
    }
    else if (eighthQues.eight === "CYBER SECURITY '100$'") {
        console.log(`YOU SUCESSFULLY PAID THE FEES OF COURSE ${eighthQues.eight}`);
        balance -= one;
        console.log(`DEAR CUSTOMER YOUR CURRENT BALANCE IS ${balance}`);
    }
    else if (eighthQues.eight === "MACHINE LEARNING' 2000$'") {
        console.log(`YOU SUCESSFULLY PAID THE FEES OF COURSE ${eighthQues.eight} `);
        balance -= two;
        console.log(`DEAR CUSTOMER YOUR CURRENT BALANCE IS ${balance}`);
    }
    else if (eighthQues.eight === "DATA SCIENCE '1000$'") {
        console.log(`YOU SUCESSFULLY PAID THE FEES OF COURSE ${eighthQues.eight} `);
        balance -= four;
        console.log(`DEAR CUSTOMER YOUR CURRENT BALANCE IS ${balance}`);
    }
    else if (eighthQues.eight === "PHYTHON PROGRAMMING '100$'") {
        console.log(`YOU SUCESSFULLY PAID THE FEES OF COURSE ${eighthQues.eight} `);
        balance -= one;
        console.log(`DEAR CUSTOMER YOUR CURRENT BALANCE IS ${balance}`);
    }
    else if (eighthQues.eight === "DOCKERS OR KUBERNETEES '500$'") {
        console.log(`YOU SUCESSFULLY PAID THE FEES OF COURSE ${eighthQues.eight} `);
        balance -= three;
        console.log(`DEAR CUSTOMER YOUR CURRENT BALANCE IS ${balance}`);
    }
}
else {
    console.log("DEAR CUSTOMER YOUR  CURRENT BALANCE IS ${balance}");
}
console.log("\n YOUR ID CARD! ");
console.log(`*  NAME: ${firstQues.first}`);
console.log(`*  ID: ${id}`);
console.log(`*  COURSE: "${secondQues.second}" | "${forthQues.forth}"`);
console.log(`*  STATUS: ${firstQues.first} YOU ARE ONSITE STUDENT`);
