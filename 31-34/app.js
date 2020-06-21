// chapter 31-34 task 1-14
function task1(){
var date = new Date();
document.write(date);
}

function task2(){
    var date = new Date();
    var months = ["January","Ferburary","March","April","May","June","July","August","September","October","November","December"];
    var month = date.getMonth();
        document.write("Current Month:" + months[month]);
    }

    function task3(){

        var date = new Date();
        var day = +date.getDay();
       switch(day){
           case 0:
            alert("Today is Sun");
            break;
            case 1:
            alert("Today is Mon");
            break;
            case 2:
            alert("Today is Tue");
            break;
            case 3:
            alert("Today is Wed");
            break;
            case 4:
            alert("Today is Thu");
            break;
            case 5:
            alert("Today is Fri");
            break;
            case 6:
            alert("Today is Sat");
            break;
            default:
                alert("out dated");
                break;
       } 


    }

    function task4(){

        var date = new Date();
        var day = +date.getDay();
      if(day === 0 || day === 6){
          document.write("It's Funday");

      }else{
        document.write("not a funday it's a working day")

      }

    }

    function task5(){

        var date = new Date();
        var day = +date.getDate();
     
      if(day < 16){
       
        document.write("First Fifteen Days of the Month");

    }else{
      document.write("Last Days of the Month");

    }

    }

    function task6(){

        var date = new Date();
        var odate = new Date(0);
        var mili =  date - odate;

     document.write("Current:"+date+"<br>");
     document.write("Elapsed Milliseconds since January 1,1970: "+mili+"<br>");
     document.write("Elapsed Minutes since January 1,1970: "+mili /1000/60);
    }

    function task7(){

        var date = new Date();
        var hrs = date.getHours();
        if (hrs >= 12)
     document.write("It's PM");
     else{
        document.write("It's AM");

     }
    }

    function task8(){

        var date = new Date(2020,11,31);
     
     document.write("Later Date: "+ date);
     
    }

    function task9(){

        var sdate = new Date(2020,3,24);
        var cdate = new Date();
        var days =  cdate - sdate;
         days = Math.floor(days /(1000 * 3600 * 24));
     document.write( days+ " Days has passed Since 1st Ramdan 2020 ");
     
    }

    function task10(){

        var refd = new Date(2015,11,05,22,50,16);
        var begd = new Date(2015,0,1);
        var diff = refd - begd;
        diff = diff /60000;
           document.write("On Ref Date: " + refd +"<br>");
           document.write(Math.ceil(diff)+ " Seconds has Passed Since Beginning of 2015");
     
    }

    
    function task11(){

       var cdate = new Date(2015,11,5,23,8,16);
       document.write(cdate);
       cdate.setHours(23-1);
       document.write('<br>');
       document.write("1 Hour Ago, it Was "+cdate);
     
    }

    function task12(){

        var cdate = new Date(2015,11,5,23,9,37,);
        var year = cdate.getFullYear();
        document.write(cdate);
        cdate.setFullYear(year - 100);
        document.write('<br>');
        document.write("100 Years Back, it Was "+ cdate);
      
     }

     function task13(){

        var age = +prompt("Enter Your Age");
        var date = new Date();
        var year = date.getFullYear();
        var ac = +(year-age);
        document.write("your age is:"+age);
        document.write("<br>");
        document.write("your birth year is:"+ac);
      
     }

     function task14(){
        var months = ["January","Ferburary","March","April","May","June","July","August","September","October","November","December"];
        var cName = prompt("Enter Customer Name: ");
        var cMonth = months[new Date().getMonth()];
        var nUnits = +prompt("Enter number of units: ");
        var cperUnit = +prompt("Enter Charges per units: ");
        var nApay = nUnits * cperUnit;
        var latePaySur = 350;
        var gApay = nApay + latePaySur;
        document.write("<h1>K-Electric Bill </h1>");
        document.write("Customer Name: "+cName);
        document.write("<br>");
        document.write("Month: "+cMonth);
        document.write("<br>");
        document.write("Number of Units: "+nUnits);
        document.write("<br>");
        document.write("Charges Per Unit: "+cperUnit);
        document.write("<br>");
        document.write("<br>");
        document.write("Net Amount Payable (Within Due Date): "+nApay);
        document.write("<br>");
        document.write("Late Payment Surcharge: "+latePaySur);
        document.write("<br>");
        document.write("Gross Amount Payable (After Due Date): "+gApay);
     }