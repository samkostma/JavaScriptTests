/*--"1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not
exceed four million, find the sum of the even-valued terms."*/

var sumOfEvens = function(max){
var fibSequence = [0,1,0];
var evenSum = 0;
while (fibSequence[2] <= max){
        fibSequence[2]=fibSequence[0]+fibSequence[1];
        if(fibSequence[2]%2 === 0 && fibSequence[2]<max){
            evenSum += fibSequence[2];
        }
        fibSequence[0] = fibSequence[1];
        fibSequence[1] = fibSequence[2];
}
return evenSum;
};
sumOfEvens(4000000);
