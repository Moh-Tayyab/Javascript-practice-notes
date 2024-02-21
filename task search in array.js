var arr =[12,23,34,45,56,67,78,89,90]
var input = parseInt(prompt("Please enter number to find"));

console.log("User input =" ,input);
var found =false;
for(var i = 0; i < arr.length; i++){
    //console.log(arr[i]);

    if(arr[i] === input){
        console.log("Found " +input+ " on index = " +i);
        found =true;
        break;
    }
}
if (!found){

console.log("Not found");
}