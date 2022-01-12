const express = require("express");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();

});

app.get("/img1", (req, res) => {
    res.status(200).download("./n02088094_1003.jpg");

 
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World!",
        image:"http://127.0.0.1:3000/img1"

    });
});


app.listen(port, () => {
    console.log("Server is listening!!!");
})