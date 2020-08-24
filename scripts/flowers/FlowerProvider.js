let flowers = []



export const getFlowers = () => {
    return fetch("http://localhost:3000/flowers")
        .then(resp => resp.json())
        .then(parsedRes => {
            flowers = parsedRes
        })
        
}


export const useFlowers = () => {
    return flowers.slice()
}