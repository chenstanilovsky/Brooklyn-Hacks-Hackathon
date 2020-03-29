let express = require('express');
let app = express();
let path = require('path');

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/map.js', function(req,res){
  res.sendFile(path.join(__dirname + "/map.js"))
});
app.listen(8000);
/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
