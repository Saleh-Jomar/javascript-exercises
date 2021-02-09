const sumAll = function(num1,num2) {
    let n = Math.abs(num1-num2)+1
    let sum = 0;
    switch(true){
        case num1<0||num2<0:
        case !Number.isInteger(num1)||!Number.isInteger(num2):
            return 'ERROR';
            break;
        default:
            sum = n*(num1+num2)/2;
            return sum;
            break;
    }
    

}

module.exports = sumAll
