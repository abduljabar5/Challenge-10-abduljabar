const inquirer = require('inquirer');
const fs = require('fs');
const managers = require("./lib/Manager.js");
let bank = []
let engineerbank = []
let internbank = []
function start(){

  function questions(){
    inquirer
.prompt([
    {
      type: "list",
      message: "choose from the following options",
      name: "select",
      choices: ["Manager", "Engineer", "Intern", "Finnish Build"]
  }])
  .then(function (response) {
        console.log(response);
        console.log(response.name);
        if (response.select === "Manager"){
          manager();
        } else if (response.select === "Engineer"){
          engineer();
        } else if (response.select === "Intern"){
          intern();
        } else if (response.select === "Finnish Build"){
          createhtml();
        }
      })
}

questions();

function manager(){
inquirer
.prompt([
    {
      type: 'input',
      message: 'What is your team managers name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is their employee ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is their email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is their office number',
      name: 'officenumber',
      
    },
    
])
.then(function (response) {
    console.log(response);
    console.log(response.name);
    let name = response.officenumber
    const manage = new managers()
    manage.managercard(name);
    bank.push(response)
    console.log(bank)
   questions();
  })
}

// engineer 

function engineer(){
  inquirer
  .prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is their employee ID?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is their GitHub?',
        name: 'github',
      },
      
  ])
  .then(function (response) {
      console.log(response);
      console.log(response.name);
      engineerbank.push(response)
    console.log(engineerbank)
     questions();
    })
  }

  // intern

  function intern(){
    inquirer
    .prompt([
        {
          type: 'input',
          message: 'What is the interns name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is their employee ID?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'What is their email address?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What school does the intern attend?',
          name: 'school',
        },
        
    ])
    .then(function (response) {
        console.log(response);
        console.log(response.name);
        internbank.push(response)
    console.log(internbank)
       questions();

      })
    }
   function createhtml(){
        writeToFile();
        writeToFile1();
        writeToFile2();
    }
  }
    
  function writeToFile() {
   
    for (let i = 0 ; i < bank.length; i++){
     const {name,id,email,officenumber} = bank[i]
    fs.appendFile('index.html',`
    
        <div class="container">
            <div  class="card">
                <head class="title"> 
                    <div class="spot"> ${name}</div>
                    <div class="title">Possition: Manager</div>
                </head>
                <br>
                <div class="main">
                    <div class="id">ID:${id}</div>
                    <div class="email">Email:<a class="email" href="mailto:abduljabar.nur.8@gmail.com">${email}</a></div>
                    <div class="office">Office#:${officenumber}</div>
                </div>
            </div>
            `, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
   }}
////engineer
   function writeToFile1() {
   
    for (let i = 0 ; i < engineerbank.length; i++){
     const {name,id,email,github} = engineerbank[i]
    fs.appendFile('index.html',`
    
        
            <div  class="card">
                <head class="title"> 
                    <div class="spot"> ${name}</div>
                    <div class="title">Possition: Engineer</div>
                </head>
                <br>
                <div class="main">
                    <div class="id">ID:${id}</div>
                    <div class="email">Email:<a class="email" href="mailto:abduljabar.nur.8@gmail.com">${email}</a></div>
                    <div class="office">github:<a class="office" href="https://github.com/${github}" target="_blank">GitHub</a>  </div>
                </div>
            </div>
            `, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
   }}
   function writeToFile2() {
////// intern
    for (let i = 0 ; i < internbank.length; i++){
     const {name,id,email,school} = internbank[i]
    fs.appendFile('index.html',`
    
      
            <div  class="card">
                <head class="title"> 
                    <div class="spot"> ${name}</div>
                    <div class="title">Possition: Intern</div>
                </head>
                <br>
                <div class="main">
                    <div class="id">ID:${id}</div>
                    <div class="email">Email:<a class="email" href="mailto:abduljabar.nur.8@gmail.com">${email}</a></div>
                    <div class="office">school:${school}</div>
                </div>
            </div>
            </div>
            </body>
            </html>
            `, (err) =>
    err ? console.error(err) : console.log('Success!')
    )
   }}
  //  function writeToFile3() {
  //       fs.appendFile('index.html',`
  //                   </div>
  //               </body>
  //               </html>
  //               `, (err) =>
  //       err ? console.error(err) : console.log('Success!')
  //       )
  //      }

start();
  