# eSVA

## Steps to setting up server

### Make sure Node is installed before you start ###

**After you have completed forking and creating your own copy run these command inside the terminal with the path to the current working directory:**
- First you install all the packages required that is in the package.json by running:
 ```console
npm install
npm install express
npm install nodemon
```
- Then to start the server you navigate into the backend folder by using the cd command and then you type in the command:
```console
node server.js
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

- To load the webpage go into your browser and type in localhost:8000. When the page loads it will direct you to the sign in page. To register a new user click the word "registrer", on that page you will be able to register a new user they are rules you have to follow for each field. Please see instructions below:
    - Name: Must me alphacharacters less than or equal 14 characters long
    - Email: Must follow standard email format
    - Password: A combination of uppercase letters, lowercase letters, numbers, and symbols. Must be a minimum of 8 characters
    - Confirm Password: Must match the password


