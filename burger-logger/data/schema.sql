//createdatabase//

DROP DATABASE IF EXISTS ;

CREATE DATABASE ;

USE ;

CREATE TABLE burgers (
    Id int AUTO_INCREMENT NOT NULL  ,
    burger_name varchar(225) NOT NULL,
    eaten BOOLEAN DEFAULT false,
    primary key (Id)
);

