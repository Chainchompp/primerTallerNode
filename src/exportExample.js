
//Arrow function declaration
const multiply = (a,b)=>{
    return a*b
}
const square = (a)=>{
    return multiply(a,a)
}
const printSquare = (a)=>{
    let squareNum = square(a)
    console.log(squareNum)
}

module.exports = {
    multiply,
    square,
    printSquare
}