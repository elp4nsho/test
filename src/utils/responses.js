exports.responseOk = (res,data)=>{
    let r = {};
    res.statusCode = 200;
    r.codigo = 200;
    r.respuesta = {mensaje:"OK",data}
    res.json(r);
};
exports.responseError = (res,err)=>{
    let r = {};
    res.statusCode = 400;
    r.codigo = 400;
    r.respuesta = {mensaje:"Error",error:err}
    res.json(r);
};
