const { mongerInventory } = require("./fishMonger.js")

const fishMenu = (maximumPrice) => {
    let fishMenu = `<h1>Menu</h1>
    
    <article class="menu">`
    const fishToBeBought = mongerInventory(maximumPrice) 

    fishMenu += fishToBeBought.map(fish => (`
            <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
    `)).join('');

    // for (const fish of fishToBeBought) {
    //     fishMenu += `
    //         <h2>${fish.species}</h2>
    //         <section class="menu__item">${fish.species} Soup</section>
    //         <section class="menu__item">${fish.species} Sandwich</section>
    //         <section class="menu__item">Grilled ${fish.species}</section>
    // `;
    // }

    fishMenu += `</article>`

    return fishMenu

}

module.exports = { fishMenu }