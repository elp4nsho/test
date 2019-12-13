const {DATABASE_NAME, USERNAME, PASSWORD, HOST, DIALECT} = require('../config/database');
const Sequelize = require('sequelize');
const actions = require('../core/global');

const ProductModel = require('./models/product');
const SaleModel = require('./models/sale');

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

sequelize.sync({force: false})
    .then(() => {
        console.log("database created succesfully")


    });
function aDay(){
    actions.sellnDecreaseAll(Product);
    actions.priceDecreaseAll(Product);
    Sale.findAll
}
module.exports = {
    Product,
    Sale,
    aDay
};
