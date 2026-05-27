
//creamos una constante, a la cual le asignamos una
//funcion anonima

// req = request peticion
// res=res = response respuesta
// next
const logger = (req, res, next) => {

console. log (`${req.method} ${req.url} `);
next();

};

module.exports = logger;