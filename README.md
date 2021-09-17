# learnJavaScript
Basic info : let , const are block scope variable and var is mot a blocked scoped variable. i.e you can access the blocked defined var from the parent function scope.
example:
 const name ='Gaurav'; //This is global scope variable.
 funtions name(){
 cont add = "Delhi"; //This const is in block scope , we cannot access this out side this block
 var pincode  = 110032; //This const is not in block scope its in the global scope.
 }
 console.log(pincode); //It wont show error 
 console.log(add);//it will
 
