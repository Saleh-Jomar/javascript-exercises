const reverseString = function(string) {
    let reversedString = '';
    for (let i=1; i<=string.length; i++){
        reversedString += string.substr(-i,1); 
    }
    return reversedString;
}

module.exports = reverseString
