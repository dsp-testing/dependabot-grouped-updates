// Minimal index.js file to make this a valid Node.js project
console.log('Dependabot test project');

// Example usage of dependencies
if (typeof window === 'undefined') {
  // Node.js environment
  const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello from dependabot test project!');
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}