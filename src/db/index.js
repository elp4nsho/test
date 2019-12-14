const {DATABASE_NAME, USERNAME, PASSWORD, HOST, DIALECT} = require('../config/database');
const Sequelize = require('sequelize');
const actions = require('../core/global');
const cron = require("node-cron");
const ProductModel = require('./models/product');
const SaleModel = require('./models/sale');
const datosBase = require("./constants");


const sequelize = new Sequelize(DATABASE_NAME, USERNAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


const Product = ProductModel(sequelize, Sequelize);
const Sale = SaleModel(sequelize, Sequelize);

Product.hasMany(Sale);
Sale.belongsTo(Product);


sequelize.sync({force: true})
    .then(() => {
        console.log("database created succesfully");
        Product.bulkCreate(datosBase.data).then(prod=>{});
        cron.schedule("0 00 * * *", function () {
            aDay();
        });

    });

function aDay(){
    actions.sellnDecreaseAll(Product);
    actions.priceDecreaseAll(Product);
}

module.exports = {
    Product,
    Sale,
    aDay
};
