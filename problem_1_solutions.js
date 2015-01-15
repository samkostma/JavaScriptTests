/*---Find the sum of all the multiples of 3 or 5 below 1000.----*/


var input = prompt("Find the sum of all factors of 3 add 5 below");
    var sum = 0;
    for(var i = 1; i < input; i++){
        if(i % 3 === 0){
            sum += i;
        }
        else if(i % 5 === 0){
            sum += i;
        }
    }
    console.log(sum);
    
  /*-------OR------*/
  
    var sum = 0;
    for(var i = 1; i < 1000; i++){
        if(i % 3 === 0){
            sum += i;
        }
        else if(i % 5 === 0){
            sum += i;
        }
    }
    console.log(sum);
