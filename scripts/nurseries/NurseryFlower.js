let nurseryFlowers = []



export const getNurseryFlowers = () => {
    return fetch("http://localhost:3000/NurseryFlowers")
        .then(resp => resp.json())
        .then(parsedRes => {
            nurseryFlowers = parsedRes
        })
        
}


export const useNurseryFlowers = () => {
    return nurseryFlowers.slice()
}