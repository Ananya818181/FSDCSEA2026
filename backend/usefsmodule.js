const fs= require('fs')
const fs1= require('fs').promises
function writeData(){
    let statusmsg="";
    try{
          fs.writeFileSync("studentdata.txt","Welcome to nodefs module");
        //   console.log("Data is written successfully");
        statusmsg="Data is written successfully";
    }
    catch(e){
        //    console.log("Error is :"+e);
        statusmsg="Error is :"+e;
    }
    return statusmsg;
}

function readData(){
    let statusmsg="";
    try{
       const fdata=fs.readFileSync('studentdata.txt',{encoding:'utf-8'})
       statusmsg=fdata;
    }
    catch(e){
   statusmsg=e;
    }
    return statusmsg;
}

function deleteData(){
    let statusmsg="";
    try{
        fs.unlinkSync('studentdata.txt');
        statusmsg="File is deleted"
    }
    catch(e){
       statusmsg=e;
    }
    return statusmsg;
}

  

const obj={readData,writeData,deleteData};
module.exports=obj;
