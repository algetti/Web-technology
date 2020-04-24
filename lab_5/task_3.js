  
function parseNum(numToParse) {
    let charArr = numToParse.toString().split("")
    const parsedDate = charArr.map(function (value) {
      return parseInt(value, 10);
    })
    return parsedDate;
  }
function clearArray(array) {
    while (array.length) {
        array.pop();
    }
  }

function additivePersistence(num) { 
    num=parseNum(num) 
    let summ=0; 
    let n=0;
    while(num.length != 1 ){
           summ= num.reduce((a, b) => a + b, 0);  
           num=clearArray(num);
           num=parseNum(summ);
           n+=1;
        } 
    return n ;    
}   

 


function multiplicativePersistence(num) { 
    num=parseNum(num) 
    let mult=0; 
    let n=0;
    while(num.length != 1 ){
           mult= num.reduce( (a,b) => a * b, 1 );  
           num=clearArray(num);
           num=parseNum(mult);
           n+=1;
        } 
    return n ;    
} 
    

 
n=additivePersistence(1679583); 
console.log("It takes ", n,
" iterations to reach a single-digit number.");
m=multiplicativePersistence(77);
console.log("It takes " , m, 
" iterations to reach a single-digit number.");