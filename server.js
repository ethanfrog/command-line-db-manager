// Import required packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');

// Define port and create an express app
const PORT = 3001;
const app = express();

// Express request parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create connection with employee_db
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
const actions = [
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
  console.log("init is being run");

  inquirer.prompt(actions).then((actionResponse) => {
    console.log('Response received');
    console.log(actionResponse);
    
    switch(actionResponse.action) {

      case 'View all departments':
        console.log("Selecting the departments table");
        db.query('SELECT * FROM departments', function (err, res) {
          console.log(res);
        });
        break;

      case 'View all roles':
        console.log("Selecting the roles table");
        db.query('SELECT * FROM roles', function (err, res) {
          console.log(res);
        });
        break;

      case 'View all employees':
      console.log("Selecting the employees table");
      db.query('SELECT * FROM employees', function (err, res) {
        console.log(res);
      });
      break;

      default:
        console.log("Invalid action selected");
        break;
    }
  });
}

// Default server response (Not Found)
// Currently given for every server request
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

init();