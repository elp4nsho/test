const {Product} = require('../db/index');

exports.findAll = () => {
    return Product.findAll()
};
exports.add = (obj) => {
    return Product.create(obj)
};

exports.findById = (id) => {
    return Product.findOne({
        where: {id}
    });

};
exports.delete = (id) => {
    return Product.destroy({
        where: {id}
    })
};
exports.update = (id, obj) => {
    console.log(obj);
    return Product.update(obj,{
        where:{id}
    });
};
