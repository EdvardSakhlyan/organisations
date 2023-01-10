const {sequelize , Sequelize} = require("sequelize")

module.exports = (sequelize , Sequelize) => {

    return sequelize.define("organisation", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tracking_in_use: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tracking_assigned: {
            type: Sequelize.STRING,
            allowNull: false
        },
        protection_in_use: {
            type: Sequelize.STRING,
            allowNull: false
        },
        protection_assigned: {
            type: Sequelize.STRING,
            allowNull: false
        },
    })

}