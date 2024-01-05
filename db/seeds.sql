INSERT INTO departments (dept_name)
VALUES ("Accounting"),
        ("Marketing");

INSERT INTO roles (title, salary, department_id)
VALUES ("Secretary", 50.0, 001),
        ("Janitor", 40.0, 001),
        ("Salesman", 60.0, 002);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Smith", 002, NULL),
        ("Jane", "Doe", 001, NULL),
        ("Mark", "Johnson", 003, NULL),
        ("Paula", "Clark", 003, NULL);