//task 2:
var http = require('http')
const port = 3000
http.createServer( (req,res) =>{
   
    res.setHeader("Content-type", "text/html");
    res.end('<h1>Hello Node!!!!</h1>\n')
}).listen(port, () =>{
    console.log(`server is running on  http://localhost:${port}`)
});
//task 3:
var fs = require('fs')
/* fs.writeFile('hello.txt',"Hello Node",(err) =>{
    if (err) throw err
    console.log("File created !")
}) */
fs.readFile("hello.txt","utf-8" ,(err,data)=>{
    if(err) throw err
    console.log(data)
})
//task 4:
var generator = require('generate-password');
var password = generator.generate({
    length: 15,
    numbers: true,
    symbols: '?!',
    
});
console.log(password);