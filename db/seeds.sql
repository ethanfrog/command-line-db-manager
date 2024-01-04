INSERT INTO departments (id, dept_name)
VALUES (001, "Accounting"),
        (002, "Marketing");

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "Secretary", 50.0, 001),
        (002, "Janitor", 40.0, 001),
        (003, "Salesman", 60.0, 002);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Bob", "Smith", 002, NULL),
        (002, "Jane", "Doe", 001, NULL),
        (003, "Mark", "Johnson", 003, NULL),
        (004, "Paula", "Clark", 003, NULL);