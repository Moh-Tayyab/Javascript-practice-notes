var num =parseInt(prompt("Please enter a number"));
var isPrime =true;
 for (var i = 4; i < num; i++){
    var result = num % i;
    if(result ==0){console.log("Number is not a prime=" +num+ "I" +i)
    isPrime =false;
    break;
 }
 }

 if(isPrime){
    console.log("Number is a prime" +num)
 }