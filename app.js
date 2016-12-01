// const events = require('events');
// const util = require('util');
const fs = require('fs');
const http = require('http');

var myReadStream = fs.createReadStream(__dirname + "/readme.txt",'utf-8');

cosnole.log("Tytuś:*");

myReadStream.on('data', (chunk)=>{
    console.log('new chonk recived');
    console.log(chunk);
} );

// var server = http.createServer( (req,res)=>{
//     console.log('request was made: ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hey ninjas!');
// } );

// server.listen(3000,'127.0.0.1');

// console.log("now listening to port: 3000");

// fs.unlink('./stuff/writeMe.txt', function(){
//     fs.rmdir('stuff');
// });

// fs.mkdir('stuff', ()=>{
//     fs.readFile('readme.txt','utf-8',(err,data)=>{
//         fs.writeFile('./stuff/writeMe.txt',data);
//     } )
// } );

// fs.readFile('readme.txt','utf-8', function(err,data){
//     fs.writeFile('yolo.txt',data);
// });


// var Person = function(name){
//     this.name = name;
// }

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');

// var people = [james,mary,ryu];

// people.forEach( (person) => {
//     person.on('speak', (msg) => {
//         console.log(person.name + " said " + msg);
//     } )
// } )

// james.emit('speak','hey JUDE!');