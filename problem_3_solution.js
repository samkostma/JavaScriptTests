/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/



var largestPrime = function(){
var primeP = 0;
var max = 10000;
var primeFactorOf = 600851475143;

for(var i=0; i <= max; i++){
    if ((i%2)!==0 && (i%3)!==0 && (i%5)!==0 && (i%7)!==0){
            if((primeFactorOf%i)===0){
            primeP = i;
            }
        }
    }
    console.log(primeP);
};
largestPrime();
