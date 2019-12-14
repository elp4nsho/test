const {Product, aDay} = require('../db/index');

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
    return Product.update(obj, {
        where: {id}
    });
};
exports.evaluateProducts = (days) => {


    return new Promise(async (pass, reject) => {
        let products = [];
        products = await Product.findAll({attributes: ['id', 'productName', 'selln', 'price']});

        let productsOfTheDay = [];
        for (let i = 0; i < days; i++) {
            aDay();
            let data = {};
            data.day = i;
            data.products = await Product.findAll({attributes: ['productName', 'selln', 'price']});
            data.products.forEach(dd=>{
            })
            productsOfTheDay.push(data);
        }
        products.forEach(p => {
            Product.update({selln: p.selln, price: p.price}, {where: {id: p.id}}).then(d => {});
        });
        pass(productsOfTheDay);

    });

};
