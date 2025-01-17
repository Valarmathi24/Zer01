
const express = require('express');
const app = express();
const port = 3000;

const validatorRoutes = require('./routes/validatorRoutes');

app.use(validatorRoutes);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
