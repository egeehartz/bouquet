let nurseries = []



export const getNurseries = () => {
    return fetch("http://localhost:3000/nurseries")
        .then(resp => resp.json())
        .then(parsedRes => {
            nurseries = parsedRes
        })
        
}


export const useNurseries = () => {
    return nurseries.slice()
}