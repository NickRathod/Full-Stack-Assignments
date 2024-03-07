function Fibonacci (startIndex, endIndex) {
    const fibonacciValues = []
    for (var i = startIndex; i < endIndex; i++) {
        fibonacciValues.push((!fibonacciValues.length || fibonacciValues.length < 2) ? 1 : fibonacciValues[fibonacciValues.length-2] + fibonacciValues[fibonacciValues.length-1])     
    }
    return fibonacciValues
}

const fibonacciValue = Fibonacci(1, 10)

console.log(fibonacciValue)