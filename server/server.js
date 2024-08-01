const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello from server!' });
});

// Catch all other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

