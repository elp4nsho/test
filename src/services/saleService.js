const {Sale, Product} = require('../db/index');

exports.findAll = () => {
    return Sale.findAll({
        include: [{
            model: Product,
            required: true,
            attributes:['productName']
        }],
        attributes:['id','createdAt']
    })
};
exports.add = (obj) => {
    return Sale.create(obj)
};

exports.findById = (id) => {
    return Sale.findOne({
        where: {id}
    });

};
exports.delete = (id) => {
    return Sale.destroy({
        where: {id}
    })
};
exports.update = (id, obj) => {
    console.log(obj);
    return Product.update(obj, {
        where: {id}
    });
};
