const Router = require('express');
const service = require("../../services/productService");
const response = require("../../utils/responses");
const router = Router();

router.get('/all', (req, res) => {
    service.findAll()
        .then(objs => {
            response.responseOk(res, objs);
        })
        .catch(e => {
            response.responseError(res, e);
        });
});

router.post('/', (req, res) => {
    service.add(req.body)
        .then(obj => {
            response.responseOk(res, obj);
        })
        .catch(e => {
            response.responseError(res, e);
        });
});

router.get('/:id', (req, res) => {
    service.findById(req.params.id)
        .then(obj => {
            response.responseOk(res, obj);
        })
        .catch(e => {
            response.responseError(res, e);
        });
});

router.delete('/:id', (req, res) => {
    service.delete(req.params.id)
        .then(obj => {
            response.responseOk(res, obj);
        })
        .catch(e => {
            response.responseError(res, e);
        });
});

router.put('/:id', (req, res) => {
    service.update(req.params.id, req.body)
        .then(obj => {
            response.responseOk(res, obj);
        })
        .catch(e => {
            response.responseError(res, e);
        });
});

router.get('/evaluateProducts/:days', (req, res) => {

    service.evaluateProducts(req.params.days)
        .then(obj => {
            response.responseOk(res, obj);
        })
        .catch(e => {
            response.responseError(res, e);
        });
});

module.exports = router;
