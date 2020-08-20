import { getRetailers, useRetailers } from "./RetailerProvider.js"
import {getDistributors, useDistributors} from "../distributor/DistributorProvider.js"
import {getNurseries, useNurseries} from "../nurseries/NurseryProvider.js"
import {getFlowers, useFlowers} from "../flowers/FlowerProvider.js"
import {getNurseryDistributors, useNurseryDistributors} from "../nurseries/NurseryDistributor.js"
import {getNurseryFlowers, useNurseryFlowers} from "../nurseries/NurseryFlower.js"
import {retailersHTML} from "./RetailerHTML.js"


const contentTarget = document.querySelector(".retailerContainer")


const render = (retailerArray) => {
   getFlowers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getNurseryFlowers)
    .then(getNurseryDistributors)
    .then(() => {
        const flowers = useFlowers()
        const distributors = useDistributors()
        const nurseries = useNurseries()
        const ndRelations = useNurseryDistributors()
        const nfRelations = useNurseryFlowers()

        const rep = retailerArray.map(retailer => {

            /*
            map over ND
            within that, map over the new array to find nurseries associated with the current retailer
  
            map over NF
  
            */

            const distributorFound = distributors.find(distributor => distributor.id === retailer.distributorId)  
            
            //returns array of 2 objects from ND and the distributorIds are the same
            const ndObjects = ndRelations.filter(nd => distributorFound.id === nd.distributorId)
            const nurseriesPerDistributor = ndObjects.map(ndObj => {
                //mapping over two objects that have an id, dID, and nID to match with nursuries.id?
                //mappedObjects will return an array of nursuries
                const foundNurseries = nurseries.find(nursery => ndObj.nurseryId === nursery.id)
                return foundNurseries
            }) 
           
            //filter NF relationships to find the one that matches the current nursery
            const flowersPerNursery = nurseriesPerDistributor.map(nursery => {
                const nfObjects = nfRelations.filter(nf => nf.nurseryId === nursery.id)
                return nfObjects
            })

            const flowersList = flowersPerNursery.map(flowerArrays => {
                const flower = flowerArrays.map(flowerObj => {
                    const test = flowers.filter(fObj => fObj.id === flowerObj.flowerId)
                    return test
                })
                return flower
            })
            console.log(distributorFound)
            console.log(retailer)
            console.log(nurseriesPerDistributor)
            console.log(flowersList)

                 retailersHTML(distributorFound, retailer, nurseriesPerDistributor, flowersList)
        }).join("")
       return contentTarget.innerHTML = rep
    })

}


export const retailerList = () => {
    getRetailers()
        .then(useRetailers)
        .then(render)
}