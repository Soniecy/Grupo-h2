const usuario = require('express').Router();

usuario.get('/usuario', (req,res)=>{
    res.render('usuario');
} )

module.exports = usuario;