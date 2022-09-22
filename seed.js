const client = require('./DB');//assume it refers to index.js within the folder

/*const userDB = require('./DB/users');
const createDemoUser = userDB.createDemoUser();
const getAllUsers  = userDB.getAllUsers();*/
//above is equivalent to below
const { createDemoUser, 
        getAllUsers} = require('./DB/users');
        


const rebuildDB = async () => {
    //delete table 
    await client.query(`
        DROP TABLE IF EXISTS demo;
    `)
    //create table from scratch
    await client.query(`
        CREATE TABLE demo(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100)
        );
    `)
    //create row into table
    /*await client.query(`
        INSERT INTO demo(name)
        VALUES('Cooper');
    `)
    await client.query(`
        INSERT INTO demo(name)
        VALUES('Ben');
    `)*/
    createDemoUser('kiwi');
    createDemoUser('iZZY');

    //grab info from table
    const data = getAllUsers();
    console.log(data.rows);
    
    
}
rebuildDB();