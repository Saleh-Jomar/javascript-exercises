const palindromes = function (string) {
    word = string.toLowerCase().split('').filter(char =>{
        const code = char.charCodeAt();
        if (code >= 97 && code <= 122){
            return true;
        }
    })
    let origWord=[...word];
    word.reverse();
    for (let i = 0; i < word.length; ++i) {
        if (word[i] !== origWord[i]) return false;
      }
    return true;
}
module.exports = palindromes
