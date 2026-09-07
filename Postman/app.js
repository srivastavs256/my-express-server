// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.json());
// let users=[
//     {id:1,Name:'Shivanshu'},
//     {id:2,Name:'Sachin'},
// ];

// app.get('/users',(req,res)=>{
//     res.json(users);
// });


// app.post('/users',(req,res)=>{
//     const {Name}=req.body;
//     const newUser ={id:user.length+1,name};
//     users.push(newUser);
//     res.status(201).json(newUser);
// });


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let user = [
    { id: 1, Name: 'Shivanshu' },
    { id: 2, Name: 'Sachin' },
];

app.get('/users', (req, res) => {
    res.json(user);
});

// 📁 GET a single user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    
    // ✅ FIXED: Renamed the local variable to 'foundUser' to avoid naming conflicts
    const foundUser = user.find(u => u.id === userId);
    
    if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(foundUser);
});

app.post('/users', (req, res) => {
    const { Name } = req.body; 
    
    const newUser = { id: user.length + 1, Name }; 
    user.push(newUser); 
    
    res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

