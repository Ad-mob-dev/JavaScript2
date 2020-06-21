//chapter 21-25 task 1-18

function task1(){
var firstName = prompt("Enter your First name :");
var lastName = prompt("Enter your Last name :");
var fullName = firstName + lastName ;

alert("Hey " + fullName + " Welcom to our Website");

}


function task2(){
    var favMobile = prompt("Enter your Favourite Mobile Phone Model :");
  var length = favMobile.length;
    
 document.write("My Favourite Phone is : " +favMobile);
 document.write("<br/>");
 document.write("Length of String : " +length);   
    }


function task3(){
var str = "Pakistani";
var indx = str.indexOf("n");
document.write("String : " +str);
 document.write("<br/>");
 document.write("Index of String : " +indx);   
}

function task4(){
    var str = "Hello World";
    var indx = str.lastIndexOf("l");
    document.write("String : " +str);
     document.write("<br/>");
     document.write("Last Index of \'l\' : " +indx);   
}

function task5(){
    var str = "Pakistani";
    var char = str.charAt(3);
    document.write("String : " +str);
     document.write("<br/>");
     document.write("character at index 3 : "+ char);   
}

function task6(){
    var firstName = prompt("Enter your First name :");
    var lastName = prompt("Enter your Last name :");
    var fullName = firstName.concat(" " +lastName);
    
    alert("Hey " + fullName + " Welcom to our Website");
    
    }

function task7(){
var str = ("Hyderabad");
var rep = str.replace("Hyder","Islam"); 
document.write("City : " +str);
document.write("<br/>");
document.write("After Replacement: "+ rep);   
}

function task8(){
var message = "Ali and Sami are best friends. They play cricket and football together";
    var rep =message.split("and").join("&");
    document.write("City : " + message);
    document.write("<br/>");
    document.write("After Replacement: "+ rep);   
   
    }

    function task9(){
        var str = "472";
        document.write("Value : " +str);
        document.write("<br/>");
        document.write("Type : " +typeof(str));
        document.write("<br/>");
        var conversion = parseInt(str);
        document.write("Value : " + conversion);
        document.write("<br/>");
        document.write("Type : " +typeof(conversion));

}

function task10(){
    var userInput = prompt("Enter Something");
    document.write("User Input : " +userInput);
    document.write("<br/>");
    document.write("Upper Case : " + userInput.toUpperCase());

}

function task11(){

    var userInput = prompt("Enter String :");
    userInput = userInput.toLowerCase().split(' ');
    document.write("splt " + userInput);
    document.write("<br/>");
        for (var i = 0; i < userInput.length; i++) { 
         userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1);
        } 
       userInput = userInput.join(' ');
        document.write(userInput); 

}

function task12(){

    var num = 35.36;
 var str = num.toString();
   str = str.split(".");
   str = str.join("");
    document.write("Number : "+ num);
    document.write("<br/>");
    document.write("Result : "+ str);
}

 
function task13(){
  var userName= prompt("Enter your Input: ");
    var split=[];
    var arr=[];
    for(var i=0;i<userName.length;i++)
    {
        split[i]=userName.split(" ");
        arr[i]=userName.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            for(var i=0;i<userName.length;i++)
            {
                split[i]=userName.split("&nbsp;");
                arr[i]=userName.charCodeAt(i);
                if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
                {
                    break;
                }
            }
        }
    
    }
    alert(message);
}


function task14(){
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What you want to order from Bakery ABC :");
 for(i=0; i < A.length; i++){
    if(userInput.toLowerCase() === A[i]){
        document.write(userInput + " is available in our Bakery at index :" + i+"<br>");
        break;
    }
    
 }//loop
 if(userInput.toLowerCase() !== A[i]) {
    document.write("We are Sorry " + userInput + ".  is not available in our Bakery <br>");
   
}
}


function task15(){
   
var Input = prompt("Enter your Password to validate");
var pass=  /(?=.*[a-z]\d).{6,}/ ;
var pass1= /(?=.*\d[a-zA-Z]).{6,}/;
if(Input.match(pass)){
    alert("Password is validated");
}else if(Input.match(pass1)){

    alert("Password can not begin with a number");
}else{

    alert("Please Enter a Valid Password");
}
}


function task16(){
var university ="University of Karachi";
for(var i =0 ; i < university.length;i++){
var arr = university[i].split("",1);
document.write(arr +"<br>");
}
    }
    
function task17(){
    var inp = "Pakistan";
    var lastChar = inp.charAt(inp.length-1);
    document.write("User Input: "+inp + "<br>");
    document.write("Last Char of Input: "+lastChar);
}

function task18(){
    var text ="The quick brown fox jumps over the lazy dog";
  var sp = text.toLowerCase().split('the').length-1;
  document.write("Text: "+text);
  document.write("<br>");
    document.write("There are "+sp +" occurence(s) of word 'the' ");
        }