USE ticket_app;

CREATE TABLE tickets (
id integer PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email varchar(255) not null,
description TEXT NOT NULL,
created timestamp NOT NULL DEFAULT NOW()
);
