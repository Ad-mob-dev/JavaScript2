// chapter 26-30 task 1-8
function task1(){
var integer = +prompt("Enter a positive integer Value");
if( integer >= 0){
document.write("Number: " +integer);
document.write("<br>");
document.write("Round off Value: " + Math.round(integer));
document.write("<br>");
document.write("Floor Value: " + Math.floor(integer));
document.write("<br>");
document.write("Ceil Value: " + Math.ceil(integer));
}else{

    alert("please Enter Positive Integer Value !!");
}

}

function task2(){
    var integer = +prompt("Enter a Negative integer Value");
    if( integer <= 0){
    document.write("Number: " +integer);
    document.write("<br>");
    document.write("Round off Value: " + Math.round(integer));
    document.write("<br>");
    document.write("Floor Value: " + Math.floor(integer));
    document.write("<br>");
    document.write("Ceil Value: " + Math.ceil(integer));
    }else{
    
        alert("please Enter Negative Integer Value !!");
    }
    
    }
    
function task3(){
    var num = +prompt("Enter number to check its absolute value");
    var abs = Math.abs(num);
document.write("The absolute value of " + num +" is " + abs);
    }


function task4(){
document.write("Random Dice Value: " + (1+ Math.floor(Math.random()*6)));
document.write("<br/>");
document.write("Random Dice Value: " +  (1+ Math.fl(Math.random()*6)));
}

function task5(){
    var coin = 1 + Math.floor(Math.random()*2);
if(coin === 1){
    document.write(coin);
    document.write("<br>");
    document.write("Random coin Value: Tails");

}else if(coin===2){
    document.write(coin);
    document.write("<br>");
    document.write("Random coin Value: Heads"  );
} else{

    document.write("coin can only have two sides");
}

}


function task6(){
   
    var num = Math.ceil(Math.random()*(100-1)+1);
    document.write("random number between 1  and 100: " +num );
   
}

function task7(){
var weight = prompt("Enter Your weight in kilograms");
weight = parseFloat(weight);
document.write("The Weight of User is " + weight + " kilograms");
     
}


function task8(){
   var num = +prompt("Enter a number between 1 & 10");
    var secret = Math.ceil(Math.random()*(10-1)+1);
   
    if(num === secret){
  
        alert("Congratulations you've Guessed a right number");
    }
    else{
        alert("try again !!");
    }
   
}