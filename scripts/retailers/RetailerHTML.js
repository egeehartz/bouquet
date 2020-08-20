export const retailersHTML = (distributorObj, retailerObj, nurseryObj, flowerObj) => {
    return `
        <div>Retailer: ${retailerObj.name}</div>
        <div class="distributed"> Distributed by: ${distributorObj.name}</div>
        <div> Nurseries the distributor purchased from:
            <ul>
            ${
                nurseryObj.map(nursery => {
                    return `<li>${nursery.name}</li>`
                })
            }
            </ul>
        </div>
        <div> Flowers ${retailerObj.name} can sell:
            <ul>
            ${
                flowerObj.map(flowers => {
                    flowers.map(flower => {
                        return `<li>${flower.name}</li>`
                    })
                })
            }
            </ul>
        </div>
    
    `


}