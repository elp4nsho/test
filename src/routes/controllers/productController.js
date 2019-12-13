const Router = require('express');
const service = require("../../services/productService");
const router = Router();

router.get('/all', (req, res) => {
    service.findAll()
        .then(objs => {
            res.json(objs)
        });
});

router.post('/', (req, res) => {
    service.add(req.body)
        .then(obj => {
            res.json(obj)
        });
});

router.get('/:id', (req, res) => {
    service.findById(req.params.id)
        .then(obj => {
            res.json(obj)
        });
});

router.delete('/:id', (req, res) => {
    service.delete(req.params.id)
        .then(obj=>{
           res.json(obj);
        });
});

router.put('/:id', (req, res) => {
    service.update(req.params.id,req.body)
        .then(obj=>{
            res.json(obj);
        });
});

module.exports = router;
