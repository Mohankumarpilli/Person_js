const fs = require('fs');
(function(){
    fs.readFile('Data.json','utf-8',(err,data)=>{
        if(err){
            console.log('unable to read');
            return;
        }
        let arr = JSON.parse(data);
        console.log('person at index 3, name ',arr[2].name,' city ',arr[2].city);
    })
})();