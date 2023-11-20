let fetchData = (url) =>{
    return new Promise((resolve, reject) =>{
        fetch(url)
            .then((Response)=> Response.json())
            .then((data)=> resolve(data))
            .catch((error)=> reject('Error', error))
    })
}
fetchData('https://dog.ceo/api/breeds/image/random').then((cc)=> console.log(cc))