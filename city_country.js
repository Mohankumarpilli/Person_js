const fs = require('fs');
(function(){
    const arr = JSON.parse(fs.readFileSync('Data.json','utf-8'));
    for(let  i = 0; i < arr.length; i++){
        console.log('city: ',arr[i].city,', country: ',arr[i].country);
    }
})();