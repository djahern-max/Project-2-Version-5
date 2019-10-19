CREATE DATABASE IF NOT EXISTS passwords;
USE passwords;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	username varchar(20),
	fullname varchar(20),
	password varchar(128),
	PRIMARY KEY (id)
);
