const { data } = require("./data.js")

const boatInventory = () => {
    
    const fishInfo = data.fishObjects

    return fishInfo
}

module.exports = { boatInventory }