import { getFlowers, useFlowers } from "./FlowerProvider.js"
import {flowersHTML} from "./FlowerHTML.js"


const contentTarget = document.querySelector(".flowerContainer")


const render = (flowerArray) => {
    let representation = ''
    flowerArray.forEach(flower => {
        representation += flowersHTML(flower)
    })

    contentTarget.innerHTML = `
    <h2>Flowers</h2>
        <div>
        ${representation}
        </div>
    `
}


export const flowerList = () => {
    getFlowers()
        .then(useFlowers)
        .then(render)
}





