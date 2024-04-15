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

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/css', express.static(css, { 'extensions': ['css'] }));
app.use('/scripts',express.static(scripts, {'extensions': ['js']}));
app.use('/imgs', express.static(imgs, {'extensions' : ['jpg', 'jpeg', 'png', 'webp', 'svg', 'avif']} ));


const indexPath ='../FrontEnd/html/index.html';
const eServicerMainPath ="../FrontEnd/html/eServicer.html";
const eBenefitsMainPath ="../FrontEnd/html/eBenefits.html";
const eRebatesPath = "../FrontEnd/html/eRebates.html";
const instructionPath = "../FrontEnd/html/instructions.html"
const signupPath = "../FrontEnd/html/signup.html";
const homepagePath = "../FrontEnd/html/homepage.html"
const eChargerPath ="../FrontEnd/html/echarger.html"


app.get('/', async (req,res)=>{
    // await connection.insertUserTest();
    res.sendFile(path.resolve(indexPath));

});

app.get('/echarger.html', async (req,res)=>{
    res.sendFile(path.resolve(eChargerPath));
});

app.get('/homepage.html', async (req, res)=>{
    res.sendFile(path.resolve(homepagePath));
})

app.get('/index.html', async (req,res)=>{
    res.sendFile(path.resolve(indexPath));
});

app.get('/signup.html', async (req,res)=>{
    res.sendFile(path.resolve(signupPath));
});

app.post('/signup', async (req, res) =>{
    await connection.insertUser(req.body);
    res.json({'redirect': '/index.html'});
    console.log(req.body);
})

app.post('/index', async (req,res) =>{
    console.log(req.body);
    res.json({'suser': await connection.checkUser(req.body)})
})
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