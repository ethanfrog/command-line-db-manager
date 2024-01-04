-- Create fresh employee database
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
-- Select employee database
USE employee_db;

-- Create tables
CREATE TABLE departments (
  id INT NOT NULL,
  dept_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
  -- Set manager_id to NULL when employee has no manager
  FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);