const {sequelize , Sequelize} = require("sequelize")

module.exports = (sequelize , Sequelize) => {
    const Organisation = sequelize.define("organisation" , {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    console.log(false)

    return Organisation

}