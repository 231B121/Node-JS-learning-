//  When you create a server using Express 


const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello server has been started");
});

app.get("/about", (req, res) => {
    return res.send("This is about page");
});

app.get("/contect", (req, res) => {
    return res.send("This is contact page");
});

// direct run server using express
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});


// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });