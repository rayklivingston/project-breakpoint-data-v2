const express = require("express"); //Import express
const app = express();
app.listen(3001, () =>
    console.log("Server is running on port 3001"));
app.use(express.json());

//const router= require("express").Router();

//assign url inside HTML form to a variable
//<script type="text/javascript">  
function geturl() {
    var input = document.getElementById('urllink');
    input.value = urllink.toString();
}


//Create endpoint
app.get("/", (req, res) => {
    return res.json({ "message": "success" });
});

//http://localhost:3000/post
//route:/post
//decription:pass data from front end to back end, can use get method here as well
//           (create) add value to web-scraper 
//parameter:none
//request body: this, objects

app.post("/post", (req, res) => {
    const urllink = String(req.body.urllink);  //send data to object
    const newurl = new app({ urllink, })
    //JS promise(successful/unsuccessful)
    newurl.save().then(() => {
        //return response in json format
        res.json("Url link sent")
    }).catch((err) => {
        console.log(err);
    })


});









