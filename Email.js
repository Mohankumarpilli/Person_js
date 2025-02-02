const { isUtf8 } = require('buffer');
const fs = require('fs');

function accesses_email(){
    let arr;
    fs.readFile('Data.json','utf-8',(err,data)=>{
        if(err){
            console.log('Not able to read data');
            return;
        }
        let val = JSON.parse(data);
        for(let i = 0; i < val.length;i++){
            console.log(val[i].email);
        }
    })
}
accesses_email();