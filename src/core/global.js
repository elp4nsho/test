const {Sale, Product} = require('../db/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function sellnDecreaseAll(ent) {
    ent.increment({'selln': -1}, {
        where: {
            productName: {[Op.ne]: "Mega Cobertura"}
        }
    })

}

function priceDecreaseAll(ent) {
    ent.increment({'price': -1}, {
        where: {
            productName: {[Op.and]:[{[Op.ne]:"Mega Cobertura"},{[Op.ne]:"Super avance"}]},
            selln: {[Op.gte]: 0},
            price: {[Op.gt]: 0},

        }
    });
    ent.increment({'price': -2}, {
        where: {
            productName: {[Op.or]:[{[Op.ne]:"Mega Cobertura"},{[Op.ne]:"Super avance"}]},
            selln: {[Op.lt]: 0},
            price: {[Op.gt]: 0},

        }
    });
    ent.increment({'price': +1}, {
        where: {
            productName: {[Op.or]: ["Full Cobertura", "Full cobertura Super duper"]},
            selln: {[Op.gt]:0}

        }
    });
    ent.increment({'price': +2}, {
        where: {
            productName: {[Op.or]: ["Full Cobertura", "Full cobertura Super duper"]},
            selln: {[Op.and]: [{[Op.lte]: 10}, {[Op.gt]: 5}]}
        }
    });
    ent.increment({'price': +3}, {
        where: {
            productName: {[Op.or]: ["Full Cobertura", "Full cobertura Super duper"]},
            selln: {[Op.and]: [{[Op.lte]: 5}, {[Op.gt]: 0}]}
        }
    });
    ent.update({'price': 0}, {
        where: {
            productName: {[Op.or]: ["Full Cobertura", "Full cobertura Super duper"]},
            selln:{[Op.lte]:0}
        }
    });

    ent.increment({'price': -2}, {
        where: {
            productName: "Super avance",
            selln: {[Op.gte]: 0},
            price: {[Op.gt]: 0},

        }
    });
    ent.increment({'price': -4}, {
        where: {
            productName: "Super avance",
            selln: {[Op.lt]: 0},
            price: {[Op.gt]: 0},

        }
    });
    ent.update({'price':180},{
        where:{
            productName:"Mega Cobertura"
        }
    })

}


exports.priceDecreaseAll = priceDecreaseAll;
exports.sellnDecreaseAll = sellnDecreaseAll;
