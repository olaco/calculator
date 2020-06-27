let display = document.getElementById('calculator-screen');



function btnOne(){

   let btn1= document.getElementById('btnOne').value;

    display.innerHTML+=btn1;

}



function btnTwo(){

   let btn2= document.getElementById("btnTwo").value;

   display.innerHTML+=btn2;
}



function btnThree(){

  let btn3= document.getElementById('btnThree').value;

  display.innerHTML+=btn3;

}


function btnFour(){

   let btn4= document.getElementById('btnFour').value;
 
   display.innerHTML+=btn4;
 
 }



 function btnFive(){

   let btn5= document.getElementById('btnFive').value;
 
     display.innerHTML+=btn5;
 
 }


 function btnSix(){

   let btn6= document.getElementById('btnSix').value;
 
   display.innerHTML+=btn6;
 
 }

 function btnSix(){

   let btn6= document.getElementById('btnSix').value;
 
   display.innerHTML+=btn6;
 
 }
 

 function btnSeven(){

   let btn7= document.getElementById('btnSeven').value;
 
   display.innerHTML+=btn7;
 
 }


 function btnEight(){

   let btn8= document.getElementById('btnEight').value;
 
   display.innerHTML+=btn8;
 
 }



 function btnNine(){

   let btn9= document.getElementById('btnNine').value;
 
   display.innerHTML+=btn9;
 
 }


 function btnZero(){

   let btn0= document.getElementById('btnZero').value;
 
   display.innerHTML+=btn0;
 
 }


 function btnDivide(){

   let btnDiv= document.getElementById('btnDivide').value;

   btnDiv= '/'
 
   display.innerHTML+=btnDiv;
 
 }


 function btnCE() {

   let btnCE= document.getElementById('btnCE').value;

   btnCE= '';
 
   display.innerHTML=btnCE;
 }




 function btnPlus(){

   let btnPlus= document.getElementById('btnPlus').value;
 
   display.innerHTML+=btnPlus;
 
 }



 function btnMinus(){

   let btnM= document.getElementById('btnMinus').value;
 
  //  display.innerHTML+=btnM;

   console.log(display.innerHTML+=btnM);
 
 }



 function btnTimes(){

   let btnT= document.getElementById('btnTimes').value;
  

   
 
   display.innerHTML+=btnT;
 
 }




   function showdisplay(){
      
    let btnE= document.getElementById('btnEqual').value;

    
      
     if (btnE) {
          // Calculate
          display.innerHTML= eval(display.innerHTML);
           
      } 

     
     
    
   }