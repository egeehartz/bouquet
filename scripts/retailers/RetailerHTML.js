export const retailersHTML = (retailerObj) => {
    return `
        <div>Retailer: ${retailerObj.name}</div>
        <div class="distributed"> Distributed by: ${retailerObj.distributor.name}</div>
    
    `


}