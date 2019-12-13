const express = require('express');
const routes = require('./routes/routes');
const { Product } = require('./db/index');

const port = 3001;

const app = express();

app.use('/product', routes.product);

app.listen(port, () =>
    console.log(`listening on port ${port}!`),
);
