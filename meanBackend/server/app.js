const express = require("express");
const path = require("path");
const app = express();
app.use(express.json())
app.use(express.urlencoded())

require("./db/connection");
const Register = require("./models/userlogin")

const port = process.env.PORT || 4000;


app.use (express.static(path.join( __dirname,'./public/mean-app')));

// app.set('view engine', 'html');
app.get("/" ,(req, res) =>{
    res.render("index.html")
});

app.get("/register", (req, res) =>{
    res.render("register");
})
app.post("/register", async (req, res) =>{
    // try{

        console.log(req.body.email);
        res.send(req.body.email);


    // } catch (error){
    // res.status(400).send(error);
    // }
})

app.listen(port, () =>
{
    console.log(`server running at port no ${port}`);
})