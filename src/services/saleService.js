const {Sale, Product} = require('../db/index');

exports.findAll = () => {
    return Sale.findAll({
        include: [{
            model: Product,
            required: true,
            attributes: ['productName']
        }],
        attributes: [['id', 'ventaId']]
    })
};
exports.add = (obj) => {
    return Sale.create(obj)
};

exports.findById = (id) => {
    return Sale.findOne({
        include: [{
            model: Product,
            required: true,
            attributes: ['productName']
        }],
        attributes: [['id', 'ventaId']]
    }, {
        where: {id}
    });

};
exports.delete = (id) => {
    return Sale.destroy({
        where: {id}
    })
};
exports.update = (id, obj) => {
    return Product.update(obj, {
        where: {id}
    });
};
