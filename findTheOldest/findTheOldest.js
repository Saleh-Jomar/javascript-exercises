let findTheOldest = function(array) {
    const result = array.sort((a,b)=>{
        firstAge = aliveCheck(a.yearOfDeath) - a.yearOfBirth;
        secondAge = aliveCheck(b.yearOfDeath) - b.yearOfBirth;
        return secondAge-firstAge;
    })
    return result[0];

}
let aliveCheck = (year) => !year ? 2020 : year;
module.exports = findTheOldest
