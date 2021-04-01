//createdatabase//

DROP DATABASE IF EXISTS ;

CREATE DATABASE ;

USE ;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT ,
    burger_name varchar(30) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    primary key (id)
);

