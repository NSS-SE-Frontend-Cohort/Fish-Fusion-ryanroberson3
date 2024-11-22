const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = (maximumBudget) => {
    const fishForChef = []
    const fishForMonger = []
    const fishFromBoat = boatInventory()

    for (const fish of fishFromBoat) {
        if(fish.amount >= 10 && fish.price <= 7.50) {
            fishForMonger.push(fish)
        }        
    }

    for (const fish of fishForMonger) {
        if (fish.price <= maximumBudget) {
            const chefFish = {
                id: fish.id,
                species: fish.species,
                weight: fish.weight,
                price: fish.price,
                amount: Math.floor(fish.amount / 2)
            }
            
            fishForChef.push(chefFish)
        }

    }

    return fishForChef
}

module.exports = { mongerInventory }