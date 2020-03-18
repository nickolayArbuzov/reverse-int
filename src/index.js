module.exports = function reverse (n) {
    let str = '' + n;
    let res = '';
    for (let i=0;i<str.length;i++){
        if(str[str.length-i-1] == '-'){
            return res;
        }
        res += str[str.length-i-1];
    }
    return res;
}
