//app.js

const express = require('express');

const app = express();
const PORT = process.env.PORT ||  8088;

const APP_VERSION = "v1";

const ENV_VAL = process.env.MY_ENV_VAL;

app.get('/', (req, res)=>{
    let msg = `welcome to ${APP_VERSION} your ENV_VAL is ${ENV_VAL}`;
    console.log(msg);
    res.status(200);
    res.send(msg);
});


// /sleep endpoint to sleep the app for a given time and then exit
app.get('/sleep', (req, res) => {
    console.log(`closing app of version ${APP_VERSION}`);
    res.send(`closing the app`);
    process.exit(1); // Exits the app with a non-zero status to indicate an exit

});


app.listen(PORT, (error) =>{
        if(!error)
            console.log(`App ${APP_VERSION} running on port ${PORT}`);
        else
            console.log("Error occurred, server can't start", error);
    }
);