const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

// Enable CORS for all routes
app.use(cors());

// Define the data to be returned
const data = {
  email: 'lawaltosine01@gmail.com',
  datetime: new Date().toISOString(),
  github_repo_url: 'https://github.com/Thosine-01/HNG_Stage_0', 
};

// Define the API endpoint
app.get('/api', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});