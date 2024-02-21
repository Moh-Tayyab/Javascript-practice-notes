console.log("Before");

for (var i=3; i<=10; i++) {
    if(i==5){
        break
    }
    console.log("I="+i);

}
console.log("After");

for (var i=0; i<=10; i++){
    if(i==4){
        continue
    }
    console.log("I="+i);
}