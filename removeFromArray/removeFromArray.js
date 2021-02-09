const removeFromArray = function () {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (array.includes(arguments[i])) {
            let index = array.indexOf(arguments[i]);
            array.splice(index, 1);
        }
    }
    return array;
}

module.exports = removeFromArray
