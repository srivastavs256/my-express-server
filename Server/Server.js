const express = require('express');
const app = express();
const PORT = 3000;


app.get('/welcome/:username', (req, res) => {
    
    const username = req.params.username;

    const role = req.query.role || 'Guest';

   
    res.send(`Welcome ${username}, your role is ${role}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
