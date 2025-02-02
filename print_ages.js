const { isUtf8 } = require('buffer');
const fs = require('fs');

function accesses_email(){
    fs.readFile('Data.json','utf-8',(err,data)=>{
        if(err){
            console.log('Not able to read data');
            return;
        }
        let arr = JSON.parse(data);
        for(let i = 0; i < arr.length;i++){
            console.log(arr[i].age);
        }
    })
}
accesses_email();