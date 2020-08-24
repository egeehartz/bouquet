export const retailersHTML = (distributorObj, retailerObj, nurseryObj, flowerBigArray) => {
    return `
        <div>Retailer: ${retailerObj.name}</div>
        <div class="distributed"> Distributed by: ${distributorObj.name}</div>
        <div> Nurseries the distributor purchased from:
            <ul>
            ${
                nurseryObj.map(nursery => {
                    return `<li>${nursery.name}</li>`
                }).join("")
            }
            </ul>
        </div>
        <div> Flowers ${retailerObj.name} can sell:
            <ul>
            ${
                flowerBigArray.map(flowerArray => {
                   return flowerArray.map(flowerObj => {
                        return `<li>${flowerObj[0].name}</li>`
                    }).join("")
                    }).join("")
            }
            </ul>
        </div>
    
    `


}
