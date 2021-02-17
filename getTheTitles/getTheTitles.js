const getTheTitles = function(item) {
    result = item.reduce((array,books)=>{
        array[item.indexOf(books)] = books.title;
        return array;
    },[]);
    return result;
} 
module.exports = getTheTitles;
