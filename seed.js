const client = require('./db');//assume it refers to index.js within the folder

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
    await client.query(`
        INSERT INTO demo(name)
        VALUES('Cooper');
    `)
    await client.query(`
        INSERT INTO demo(name)
        VALUES('Ben');
    `)
    //grab info from table
    const data = await client.query(`
        SELECT * FROM demo;
    `);
    console.log(data.rows);
};

rebuildDB();