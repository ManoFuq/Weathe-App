// Setting the projectData object
projectData = {};
// Define express
const express = require("express"),
    // Define app as express
    app = express();

// Define bodyParser(middle-ware)
const bodyParser = require("body-parser");
// Include bodyParser

app.use(bodyParser.urlencoded({
    "extended": false
}));
app.use(bodyParser.json());
// Define Cors
const cors = require("cors");
// Include cors

app.use(cors());
// Include the project folder
app.use(express.static("website"));
// Setting the port
const port = 8000;
// Listeneig to the port

app.listen(
    port,
    listening
);

function listening() {

    // Sending a massege to know if the port is working
    console.log(`server is running with port: ${port}`);

}
// The get request
app.get(
    "/all",
    sendData
);

function sendData(req, res) {

    res.send(projectData);

}

// The post request

app.post(
    "/add",
    addData
);

function addData(req, res) {

    const newData = req.body;

    projectData.date = newData.date;
    projectData.temp = newData.temp;
    projectData.content = newData.content;

    res.send(projectData);

}