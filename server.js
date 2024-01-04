// Import required packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');

const PORT = 3001;
const app = express();

// Express middleware
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
// const actions = [
//   {
//     type: 'list',
//     name: 'action',
//     message: 'What would you like to do?',
//     choices: ['View all departments',
//             'View all roles',
//             'View all employees',
//             'Add a department',
//             'Add a role',
//             'Add an employee',
//             'Update an employee role'],
//   },
// ];

// Function to initialize app
// function init() {
//   inquirer.prompt(actions).then((actionResponse) => {
//     console.log('Got response');
//     console.log(actionResponse);
    
//     switch(actionResponse) {
//       case 'View all departments':
//         console.log("Execute SQL query");
//         db.query('SELECT * FROM departments', function (err, res) {
//           console.log(res);
//         });
//         break;
//       default:
//         break;
//     }
//   });
// }

db.query('SELECT * FROM departments', function (err, res) {
  console.log(res);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// init();