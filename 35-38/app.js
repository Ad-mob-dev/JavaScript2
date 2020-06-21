// chapter 35-38 task 1-14
function task1(){
   // function that displays current Date & TIme
    function currentDateAndTime(){
        var date = new Date();
        document.write(date);
    }
    currentDateAndTime();
}

function task2(){
    // function that displays current Date & TIme
     function greet(first,last){
        return document.write("Welcome Dear: " + first + " " + last);
     }
     greet("Adeel","Khan");
     }
    
function task3(){
    // function that add two numbers & return Result
     function Add(num1,num2){
        return document.write("Addition is: " + (num1 + num2));
     }
    Add(3,5);
     }

function task4(){
    // function for calculator via operator
     function calc(num1,op,num2){
      switch(op){
        case "+":
            return document.write("Addition is: "+ (num1 + num2));
            break;
        
        case "-":
            return document.write("Subtraction is: "+ (num1 - num2));
            break;

        case "*":
            return document.write("Multiplication is: "+ (num1 * num2));
            break; 
        
        case "-":
            return document.write("Division is: "+ (num1 / num2));
            break; 

        default: 
        return document.write("Please Enter Correct Operator");
        break;
      }
    }
    calc(9,"+",5);
}

function task5(){
    // function for square
     function square(num){
     return document.write("Square of num is: "+ (num * num));
    }
    square(4);
     }

function task6(){

   function fac(n) {
    return (n != 1) ? n * fac(n - 1) : 1;
  }
  
 document.write("Factorial of num is: "+ fac(4) );


}

function task7(){

    function counting(start,end) {
   
for(start; start <= end ; start++){


document.write("Counting : --> "+ start);
document.write("<br>");

}



   }
  counting(1,20);
 
 }


 function task8(){

function calculateHypotenuse(b,p) {
    function square(x) { return x*x; }
    return Math.sqrt(square(b) + square(p));
 }

    
    document.write ( "Hyptenuse: of a right angle triangle: "+ calculateHypotenuse(3,4) );
 
    
 }

 function task9(){

 function area(width,height){

    return document.write("Area of Rectangle is: " + (width * height));


 }
 area(10,20);

 }

 function task10(){

    function pali(str){
      str = str.toLowerCase()
      var rev =  str.split("").reverse().join("");
   
       if(str === rev){

        document.write(str+"--> is a palindrome word <br> its Reverse is same as : --> "+rev);
       } else{

        document.write("not palindrome");
       }
   
    }
    pali("aka");


}

function task11(){
function capitalizer(str){
    
var words = str.split(" ");

for (i = 0; i < words.length; ++i) {
    words[i] = String.fromCharCode(words[i].charCodeAt(0)-32)+words[i].substring(1);
}

document.write(words.join(" "));


}

capitalizer("the quick brown fox");
}

function task12(){

    function longestWord(str){
        
    var words = str.split(" ");
    var long = 0;
    for (i = 0; i < words.length;i++) {
   
        if(long < words[i].length){
        
   long = words[i].length;
   str = words[i];
   
    }
    

    }
   
    return document.write(str);
 }
 longestWord("Web Development tutorial");
}

function task13(){

function occur(str,letter){
 var count = str.split(letter).length-1;

 return document.write("Occuerence of letter : "+letter+ " is "+count);

}
occur("JSResourceS.coM","s");

}

function task14(){

    function calcCircumference(radius){
      radius = 2*Math.PI*radius;
     return document.write("Circumference of Circle: "+radius.toFixed(3));
    
    }
    function calcArea(radius){
        radius = Math.PI* radius * radius;
       return document.write("Area of Circle: "+radius.toFixed(3));
      
      }
      
      calcCircumference(14);
      document.write("<br>");
      calcArea(14);

    
    }