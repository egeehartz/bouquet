import { getFlowers, useFlowers } from "./FlowerProvider.js"
import {flowersHTML} from "./FlowerHTML.js"


const eventHub = document.querySelector(".container")


const render = (flowerArray) => {
    let representation = ''
    flowerArray.forEach(flower => {
        representation += flowersHTML(flower)
    })

    eventHub.innerHTML = `
    <h2>Flowers</h2>
        <section>
        ${representation}
        </section>
    `
}


export const flowerList = () => {
    getFlowers()
        .then(useFlowers)
        .then(render)
}

