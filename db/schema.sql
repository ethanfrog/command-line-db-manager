DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  id INT PRIMARY KEY NOT NULL,
  dept_name VARCHAR(30)
);

CREATE TABLE roles (
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30),
  salary DECIMAL,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
  --Set to NULL when there is no manager
  FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
