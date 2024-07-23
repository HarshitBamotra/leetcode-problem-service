const express = require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/server.config");


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.get('/ping', (req, res)=>{
    return res.json({
        msg: "Problem servive is up"
    });
});


app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
})