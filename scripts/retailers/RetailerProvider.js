let retailers = []



export const getRetailers = () => {
    return fetch("http://localhost:3000/retailers")
        .then(resp => resp.json())
        .then(parsedRes => {
            retailers = parsedRes
        })
        
}


export const useRetailers = () => {
    return retailers.slice()
}