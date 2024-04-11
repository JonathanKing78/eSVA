# eSVA

## Steps to setting up server
**After you have completed forking and creating your own copy run these command inside the terminal with the path to the current working directory:**
- First you install all the packages required that is in the package.json by running:
 ```console
npm install
npm install express
npm install nodemon
```
- Then to start the server you navigate into the backend folder by using the cd command and then you type in the command:
```console
nodemon server.js
```

This is what you should see on your console:
```console
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server Running on 8000"
```

- To load the webpage go into your browser and type in localhost:8000
Currently you will see hello world and then a link to the eServicer page, when you click on the link it will load the eServicer page