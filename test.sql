--run psql and create a database and connect to database
psql
CREATE DATABASE "nodeIntroDB"
;
\l
\c nodeIntroDB

--deletes a table from database
DROP TABLE IF EXISTS demo;

--create a table
CREATE TABLE demo(
nodeIntroDB(# id SERIAL PRIMARY KEY,
nodeIntroDB(# name VARCHAR(100)
nodeIntroDB(# );

--grab info from table
SELECT * FROM DEMO
;

--create new row into the table
INSERT INTO demo(name)
nodeIntroDB-# VALUES
nodeIntroDB-# ('Ben')
nodeIntroDB-# ;

--grab info from table
SELECT * FROM DEMO
;

--exit the database
\q
