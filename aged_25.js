const fs = require('fs');
(function(){
    const arr = JSON.parse(fs.readFileSync('Data.json','utf-8'));
    for(let i = 0; i< arr.length;i++){
        if(arr[i].age==25){
            console.log('name ',arr[i].name,' email :- ',arr[i].email);
        }
    }
})();