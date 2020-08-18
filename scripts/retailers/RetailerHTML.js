export const retailersHTML = (retailerObj) => {
    return `
        <div>Retailer: ${retailerObj.name}</div>
        <div> Distributed by: ${retailerObj.distributor.name}</div>
    
    `


}