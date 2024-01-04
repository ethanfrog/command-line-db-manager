// Import required packages
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '!4thProvidence!',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// Ask user for an SQL action
const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'],
  },
];

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Got responses');
    console.log(inquirerResponses);
  });
}

init();
