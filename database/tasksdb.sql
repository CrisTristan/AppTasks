CREATE table tasks (
      id INTEGER UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(200) not null,
      description VARCHAR(300),
      done BOOLEAN not null default 0,
      createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

UPDATE tasks
SET title = 'comer', description = 'pizza'
WHERE id = 8