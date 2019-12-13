module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productName: type.STRING,
        sellin: type.STRING,
        price: type.STRING,
    })
};
