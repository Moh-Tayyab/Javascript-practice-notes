const storeInventory =[["Item:Phone","Price:$14","Inventory56:"],["Item:Computer","Price:$100","Inventory:45"],
["Item:Headphones","Price:$35","Inventory:100"],["Item:Monitor","Price:$50","Inventory:37"],
["Item:Speakers","Price:$60","Inventory:80"],["Item:Printer","Price:$200","Inventory:60"],
["Item:USB Cable","Price:$20","Inventory:35"]];
for(let i =0; i < storeInventory.length; i++){
    if(i > 0){
        console.log("-------------");
    }
    for(let j = 0; j < storeInventory[i].length; j++){
            console.log(storeInventory[i][j]);
    }    
    
}