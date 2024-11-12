const express = require("express");
const bodyParser = require('body-parser');
const {PORT} = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.text());
app.use(cors({
    origin: "*"
}));

app.use("/api", apiRouter);


app.get('/ping', (req, res)=>{
    return res.json({
        msg: "Problem servise is up"
    });
});



app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
    connectToDB();
})