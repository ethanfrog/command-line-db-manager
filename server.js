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
            'Update an employee role',],
  },
];

// Ask user for new department info
const newDepartment = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new department?',
  },
];

// Ask user for new role info
const newRole = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the new role?',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the new role?',
  },
  {
    type: 'input',
    name: 'dept_id',
    message: 'What department id does the new role belong to?',
  },
];

// Ask user for new department info
const newEmployee = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of the new employee?',
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the new employee?',
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What is the id of their role?',
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'What is the id of their manager?',
  },
];

const updatedRole = [
  {
    type: 'input',
    name: 'emp_id',
    message: 'Enter an employee id',
  },
  {
    type: 'input',
    name: 'new_role_id',
    message: 'Enter the id of their new role',
  },
];

// Display the given table in the console
function selectTable(tableName) {
  console.log(`Selecting the ${tableName} table`);
    db.query(`SELECT * FROM ${tableName}`, function (err, res) {
      console.log(res);
    });
}

// Add an entry to the departments table
function addDepartment() {
  inquirer.prompt(newDepartment).then((params) => {
    console.log('Response received');
    console.log(params);
    db.query(`INSERT INTO departments (dept_Name) VALUES ('${params.name}')`);
    });
}
// Add an entry to the roles table
function addRole() {
  inquirer.prompt(newRole).then((params) => {
    console.log('Response received');
    console.log(params);
    db.query(`INSERT INTO roles (title, salary, department_id)
    VALUES ('${params.title}', ${params.salary}, ${params.dept_id})`);
    });
}
// Add an entry to the employees table
function addEmployee() {
  inquirer.prompt(newEmployee).then((params) => {
    console.log('Response received');
    console.log(params);
    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ('${params.first_name}', '${params.last_name}', ${params.role_id}, ${params.manager_id})`);
    });
}

// Update an employee role
function updateRole() {
  inquirer.prompt(updatedRole).then((params) => {
    console.log('Response received');
    console.log(params);
    db.query(`UPDATE employees
    SET role_id = ${params.new_role_id}
    WHERE id = ${params.emp_id}`);
    });
}

// Function to initialize app
function init() {
  console.log("App being initialized");
  newQuery();
}

function newQuery() {
  inquirer.prompt(actions).then((actionResponse) => {
    console.log('Response received');
    console.log(actionResponse);
    
    switch(actionResponse.action) {
      case 'View all departments':
        selectTable('departments');
        break;
      case 'View all roles':
        selectTable('roles');
        break;
      case 'View all employees':
        selectTable('employees');
        break;

      case 'Add a department':
      console.log("Adding new department");
      addDepartment();
      break;

      case 'Add a role':
      console.log("Adding new role");
      addRole();
      break;

      case 'Add an employee':
      console.log("Adding new employee");
      addEmployee();
      break;

      case 'Update an employee role':
      console.log("Updating an employee");
      updateRole();
      break;

      default:
        console.log("Invalid action selected");
        break;
    }});
}

// Default server response (Not Found)
// Currently given for every server request
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  //console.log(`Server running on port ${PORT}`);
});

init();