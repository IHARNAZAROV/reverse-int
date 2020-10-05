const {neq} = require("semver");

module.exports = function reverse(n) {
    let array = String(n).split('');
    let newarray = [];
    for (let i = String(n).length - 1; i >= 0; i -= 1)
    {
        newarray.push(array[i]);
    }
    return parseInt(newarray.join(''));
}
