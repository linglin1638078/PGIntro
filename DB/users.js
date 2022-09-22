const client = require("./");//reaching the index file in the same folder
const createDemoUser = async (name) => {
	await client.query(`
    INSERT INTO demo(name)
    VALUES($1);`,[name]);
};
const getAllUsers = async () => {
	const data = await client.query(`SELECT * FROM demo;`);
	return data.rows;
};

module.exports = {
    createDemoUser,
    getAllUsers
}
