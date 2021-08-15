





const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    alert('HOLA')
})


const loop1 = () =>{
    let i =0
    while (500000000> i){
        i++
    }
    return i
}
const loop2 = () =>{
    let i =0
    while (1500000000> i){
        i++
    }
    return i
}
const loop3 = () =>{
    let i =0
    while (500000000> i){
        i++
    }
    return i
}

console.log(loop1())
console.log(loop2())
console.log(loop3())