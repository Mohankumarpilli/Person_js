const fs = require('fs');
(function(){
    fs.readFile('Data.json','utf-8',(err,data) => {
        if(err){
            console.log('unable to read');
            return;
        }
        let arr = JSON.parse(data);
        for(let i = 0; i < arr.length; i++){
            if(arr[i].age==30){
                console.log(arr[i].hobbies);
            }
        }
    })
})();