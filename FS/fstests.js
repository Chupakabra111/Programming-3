var obj =
{
    "first_name" : "Vardan",
    "last_name" : "Hovsepyan",
    "age" : 13,
    "tumo_student" : true,
}

var myJSON = JSON.stringify(obj);

var fs = require('fs');

function main(){
   var file  = "obj.json";
   fs.appendFileSync(file, myJSON + "\n");
}
main();