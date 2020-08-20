let distributors = []



export const getDistributors = () => {
    return fetch("http://localhost:3000/distributors")
        .then(resp => resp.json())
        .then(parsedRes => {
            distributors = parsedRes
        })
        
}


export const useDistributors = () => {
    return distributors.slice()
}