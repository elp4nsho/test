const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const port = 3001;

const app = express();
app.use(bodyParser.json());

app.use('/product', routes.product);
app.use('/sale', routes.sale);


app.listen(port, () =>
    console.log(`listening on port ${port}!`),
);
