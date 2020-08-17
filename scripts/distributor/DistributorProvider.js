let retailers = []



export const getDistributors = () => {
    return fetch("http://localhost:3000/distributors")
        .then(resp => resp.json())
        .then(parsedRes => {
            retailers = parsedRes
        })
        
}


export const useRetailers = () => {
    return retailers.slice()
}