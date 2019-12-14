module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productName: type.STRING,
        selln: type.STRING,
        price: {
            type:type.INTEGER,
            validate:{
                max:100
            }
        },
    })
};
