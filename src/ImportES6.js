

const axios = require('axios')


const getData = () =>{
    axios.get('https://rickandmortyapi.com/api/character').then(res=>{
        console.log(JSON.stringify(res.data, null ,2))
    })
}

console.log(getData())