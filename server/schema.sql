CREATE DATABASE customer_support_app;

USE customer_support_app;

CREATE TABLE tickets (
id integer PRIMARY KEY,
fullName VARCHAR(255) NOT NULL,
email varchar(255) not null,
details TEXT NOT NULL,
ticketType VARCHAR(255) NOT NULL,
created timestamp NOT NULL DEFAULT NOW()
);
