let http = require("http");

let server = http.createServer( (req, res)=>{
	res.end("HELLO SERVER IS SENDING 20")
}).listen(4000, ()=>{
	console.log("Server is runing on port 4000 **")
});nodemon 