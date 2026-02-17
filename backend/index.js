const http = require('http');
const sum = require('./fetchAPI');
const {readData,writeData,deleteData}=require('./usefsmodule')

const PORT = 4002;
const server = http.createServer(async(req,res)=>{
// res.setHeader('Content.Type','application/json');
// res.end('<h2> Welcome to Node Server </h2>');
// res.end(JSON.stringify({msg:"Welcome to Node Server"}));

res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

if(req.url=='/msg' && req.method=='GET'){
  res.setHeader('Content-Type','text/html');
  res.end("<h2>Greeting of the day</h2>");
}
else if(req.url=='/data' && req.method=='GET'){
  
  res.setHeader('Content-Type','application.json');
  const data = await sum();
  res.end(JSON.stringify({msg:data}));
}


else if(req.url=='/datawrite' && req.method=='GET'){
  
  res.setHeader('Content-Type','application.json');
  const data = readData();
  res.end(JSON.stringify({msg:data}));
}

else if(req.url=='/dataread' && req.method=='GET'){
  
    res.setHeader('Content-Type','application.json');
  const data = writeData();
  res.end(JSON.stringify({msg:data}));
}

else if(req.url=='/datadelete' && req.method=='GET'){
  
  res.setHeader('Content-Type','application.json');
  const data = deleteData();
  res.end(JSON.stringify({msg:data}));
}



else{
  res.setHeader('Content-Type','text/html');
  res.end("<h2 style='color:red'>Invalid Endpoint</h2>");
}
})
server.listen(PORT,()=>{
  console.log("Server is running on "+PORT);
})