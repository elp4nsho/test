const {Sale} = require('../db/index');

exports.findAll = () => {

    return Sale.findAll()
};
exports.add = (obj) => {
    return Sale.bulkCreate(obj)
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
    return Product.update(obj,{
        where:{id}
    });
};
