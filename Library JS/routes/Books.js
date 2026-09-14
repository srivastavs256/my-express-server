const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Received GET request at /books');
    res.send('Here is the list of books!');
});

router.post('/', (req, res) => {
    const bookData = req.body;
    
    console.log('--- Now Book Data Received ---');
    console.log(bookData);
    console.log('------------------------------');

    res.send('Book has been added!');
});

module.exports = router;
