const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const connection = require('./connection');
const { extension } = require('mime-types');

const css = path.resolve("../FrontEnd/css")
const scripts = path.resolve("../FrontEnd/scripts")
const imgs = path.resolve("../FrontEnd/imgs")
const html = path.resolve("../FrontEnd/html")

app.use('/css', express.static(css, { 'extensions': ['css'] }));
app.use('/scripts',express.static(scripts, {'extensions': ['js']}));
app.use(express.static(imgs, {'extensions' : ['jpg', 'jpeg', 'png', 'webp', 'svg', 'avif']} ));


const indexPath ='../FrontEnd/html/index.html';
const eServicerMainPath ="../FrontEnd/html/eServicer.html";
const eBenefitsMainPath ="../FrontEnd/html/eBenefits.html";
const eRebatesPath = "../FrontEnd/html/eRebates.html";
const instructionPath = "../FrontEnd/html/instructions.html"
const signupPath = "../FrontEnd/html/signup.html";


app.get('/', async (req,res)=>{
    // await connection.insertUserTest();
    res.sendFile(path.resolve(indexPath));

});

app.get('/index.html', async (req,res)=>{
    res.sendFile(path.resolve(indexPath));
});

app.get('/signup.html', async (req,res)=>{
    res.sendFile(path.resolve(signupPath));
});

app.get('/eServicer.html', async (req,res)=>{
    res.sendFile(path.resolve(eServicerMainPath));
});

app.get('/eBenefits.html', async (req, res)=>{
    res.sendFile(path.resolve(eBenefitsMainPath));
});

app.get('/eRebates.html', async (req,res)=>{
    res.sendFile(path.resolve(eRebatesPath));
});

app.get('/instructions.html', async (req,res)=>{
    res.sendFile(path.resolve(instructionPath));
});

app.listen(port , () =>{
    console.log("Server Running on 8000");
});