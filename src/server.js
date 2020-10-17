// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
// iniciando o express
const server = express()
server
// utilizar body do request
.use(express.urlencoded({extended:true}))
// utilizando os arquivos estáticos (arquivos que não mudam, como imagens, html, estilos e scripts)
server.use(express.static('public'))
// configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
// criar uma rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
    //console.log(path.join(__dirname, 'views', 'index.html'));
    //return response.sendFile(path.join(__dirname, 'views', 'index.html'));
// ligar o servidor
server.listen(5500)