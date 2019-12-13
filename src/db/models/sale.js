
module.exports = (sequelize, type) => {
    return sequelize.define('sale', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: type.INTEGER
        }
    })
};
