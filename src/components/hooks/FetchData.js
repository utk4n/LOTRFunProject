
const fetcher = async() => {
    await fetch("https://lotrprojectapi-default-rtdb.firebaseio.com/characters.json").then(res => res.json()).then(data => data)
}



export default fetcher;