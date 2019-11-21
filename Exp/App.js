const http = require("http");
const port = 3000;

const server = http.createServer(function(req, res) {
  res.write("Hello Node");
  res.end();
});

server.listen(port, function(error) {
  if (error) {
    console.log("SOMETHING WENT WRONG", error);
  } else {
    console.log("SERVER IS LISTENING ON PORT" + port);
  }
});
