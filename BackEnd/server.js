const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const css = path.resolve("../FrontEnd/css")
const scripts = path.resolve("../FrontEnd/scripts")
const imgs = path.resolve("../FrontEnd/imgs")

app.use('/css', express.static(css, { 'extensions': ['css'] }));
app.use(express.static(scripts));
app.use(express.static(imgs));

const indexPath ='../FrontEnd/html/index.html';
const eServicerMainPath ="../FrontEnd/html/eServicer.html";
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(indexPath));
});

app.get('/eServicer.html', (req,res)=>{
    res.sendFile(path.resolve(eServicerMainPath));
});


app.listen(port , () =>{
    console.log("Server Running on 8000");
});