const Sequelize = require('sequelize');

const ProductModel = require('./models/product');
const {DATABASE_NAME, USERNAME, PASSWORD, HOST, DIALECT} = require('../config/database');

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


sequelize.sync({force: false})
    .then(() => {
        console.log("database created succesfully")
    });

module.exports = {
    Product
};
