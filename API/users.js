const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    createDemoUser
} = require('../DB/users');

//get all users GET ocalhost:3000//api/users
router.get('/', async(req, res, next) => {
    const users = await getAllUsers();
    res.send(users);
});

//get single user GET localhost:3000/api/users/:id
router.get('/:id', async (req, res, next) => {
    const users = await getAllUsers();
    const user = users.find((user)=>user.id === +req.params.id)
    res.send(user)
});

//post localhost:3000/api/users
router.post('/', async (req, res, next) => {
    await createDemoUser(req.body.name);
    res.send('users created');
});

module.exports = router;