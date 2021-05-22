require('dotenv').config({ path: `${__dirname}/../.env` });
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World');
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
