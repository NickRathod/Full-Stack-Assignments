console.log('1');

setTimeout( function () {
    console.log('5');
}, 10)

setTimeout( function () {
    console.log('3');
}, 0)
setTimeout( function () {
    console.log('2');
})

// first way
setTimeout( function () {
    console.log('Seconds OVER and I am HERE');
}, 5 * 1000 )
console.log('4');

// second way
function callingFromFunction () {
    console.log('Seconds OVER and I IN FUNCTION');
}
setTimeout( callingFromFunction, 6 * 1000 )
