const http = require("http");
require("dotenv").config;
const getDatas = require("./getDatasCtrl");

//test to create a pure node server
const server = http.createServer((req, res) => {
  //CORS
  res.setHeader("Access-Control-Allow-Origin", "*");

  //get all datas route
  if (req.url === "/datas") {
    getDatas(req, res);
  } else {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write("Not found");
    res.end();
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
