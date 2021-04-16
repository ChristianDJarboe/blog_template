const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const { logger, authenticate } = require('./middleware')
const authRouter = require("./routers/auth")
const apiRouter = require("./routers/api")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept,token,project_id,post_id');
    next();
});

app.use(bodyParser.json());
app.use(logger);
app.use(bodyParser.urlencoded({extended: false}));

app.use("/auth",authRouter);
app.use("/api", apiRouter);




app.get("/editor",(req,res)=>{
    app.use(express.static(__dirname+"/views/editorPage/build/static"));            //required for css and js
    app.use(express.static('./views/editorPage/build', express.static('static')));  //required for images and fonts
    res.sendFile(__dirname + "/views/editorPage/build/index.html");   
})

app.get("/",(req,res)=>{
    app.use(express.static(__dirname+"/views/publicPage/build/static"));            //required for css and js
    app.use(express.static('./views/publicPage/build', express.static('static')));  //required for images and fonts
    res.sendFile(__dirname + "/views/publicPage/build/index.html");   
})

app.listen(port, function(){
    console.log("listening on "+port);
})