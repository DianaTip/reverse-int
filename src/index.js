module.exports = function reverse (n) {
    if (n<0){
        n = Math.abs(n)
      }
   var n1 = String(n).split('').reverse().join('')
    return n1 = Number(n1)
}
