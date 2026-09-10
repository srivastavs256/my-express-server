const express = require('express');
const router = express.Router(); 


router.get('/', (req, res) => {
    res.send('Fetch all users');
});

router.post('/', (req, res) => {
    res.send('Create a new user');
});


router.get('/:id', (req, res) => {
    res.send(`Fetch details for user ID: ${req.params.id}`);
});


module.exports = router;
