const db = require("../models");
const {Op} = require("sequelize")

//create main Model
const Organisation = db.organisations

//main work

//1. create organisation

const addOrganisation = async (req,res) => {

    let info = {
        name: req.body.name
    }

    const organisation = await Organisation.create(info , {
        isNewRecord: true
    })
    res.status(200).send(organisation)

}

//2. get all organisations

const getOrganisations = async (req,res) => {

    let organisations = await Organisation.findAll({
        order: [['id', 'DESC']],
    })

    res.status(200).send(organisations)
}

//3. get single organisation

const getOrganisation = async (req,res) => {

    let id = req.params.id
    let organisation = await Organisation.findOne({where: {id}})

    res.status(200).send(organisation)
}

//4. update organisation

const updateOrganisation = async (req,res) => {

    let id = req.params.id
    let organisation = await Organisation.update(req.body,{where: {id}})

    res.status(200).send(organisation)
}

//5. update organisation

const deleteOrganisation = async (req,res) => {

    let id = req.params.id

    await Organisation.destroy({where: {id}})

    res.status(200).send(`Organisation with id ${id} deleted`)
}

//6. find organisation

const searchOrganisation = async (req,res) => {

    let organisations = await Organisation.findAll({
        order: [['id', 'DESC']],
        // where: {
        //     someAttribute: {
        //         [Op.startsWith]: 'Fir',
        //     }
        // }
    })

    res.status(200).send(organisations)
}

module.exports = {addOrganisation,getOrganisations,getOrganisation,updateOrganisation,deleteOrganisation,searchOrganisation}