var foods =["Burger","Sandwich","Snacks","Biryani","Pizza","Shami Burger",
"Zanger Burger","Chicken Roll","Chicken Tikka"];

var input = prompt("Please enter your order");

console.log("User Input =" ,input);
var found =false;
for(var i = 0; i < foods.length; i++){
    // console.log(foods[i]); 
    if(foods[i] === input){
    console.log("Found " +input + " on index = " +i )
    found =true;
    break;

}
}
if(!found){
    console.log("Not found");
}