const express = require('express');
const app = express();
const PORT = 3000;

const studentRoutes = require('./studentRoutes');
const courseRoutes = require('./courseRoutes');

// Required middleware to read JSON data from Postman
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send("Welcome to the Student & Course Portal API!");
});

// Connect Routers
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// Custom 404 Not Found Handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
