import { getRetailers, useRetailers } from "./RetailerProvider.js"
import {retailersHTML} from "./RetailerHTML.js"


const contentTarget = document.querySelector(".retailerContainer")


const render = (retailerArray) => {
    let representation = ''
    retailerArray.forEach(retailer => {
        representation += retailersHTML(retailer)
    })

    contentTarget.innerHTML = `
    <h2>List of Retailers</h2>
        <section>
        ${representation}
        </section>
    `
}


export const retailerList = () => {
    getRetailers()
        .then(useRetailers)
        .then(render)
}