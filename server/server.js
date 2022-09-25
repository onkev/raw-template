require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// makes files in dist folder available
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

