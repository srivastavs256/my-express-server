const express = require('express');
const app = express();
const PORT = 5000; 


app.use(express.json());

const bookRoutes = require('./routes/books');

app.use('/books', bookRoutes);

app.all('*any', (req, res) => {
    res.status(404).send('<h1>404 - Endpoint Not Found</h1>');
});

app.listen(PORT, () => {
    console.log(`Library system server is running on http://localhost:${PORT}`);
});
