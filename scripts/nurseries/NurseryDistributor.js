let nurseryDistributors = []



export const getNurseryDistributors = () => {
    return fetch("http://localhost:3000/NurseryDistributors")
        .then(resp => resp.json())
        .then(parsedRes => {
            nurseryDistributors = parsedRes
        })
        
}


export const useNurseryDistributors = () => {
    return nurseryDistributors.slice()
}