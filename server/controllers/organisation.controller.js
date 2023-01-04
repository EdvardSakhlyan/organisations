const db = require("../models");
const {Op} = require("sequelize")

//create main Model
const Organisation = db.organisations

//main work

//1. create organisation

const addOrganisation = async (req,res) => {

    let info = {
        name: req.body.name,
        tracking_in_use : req.body.tracking_in_use	,
        tracking_assigned : req.body.tracking_assigned,
        protection_in_use : req.body.protection_in_use,
        protection_assigned : req.body.protection_assigned
    }

    const organisation = await Organisation.create(info , {
        isNewRecord: true
    })
    res.status(200).send(organisation)

}

//2. get all organisations

const getOrganisations = async (req,res) => {
    let limit = req.query.limit

    const count = await Organisation.count();

    let organisations = await Organisation.findAll({
        order: [['id', 'DESC']],
        limit : Number(limit)
    })
    res.status(200).send({organisations,count})
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
    let name = req.query.name
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    let organisations = await Organisation.findAll({
        order: [['id', 'DESC']],
        // where: {
        //     someAttribute: {
        //         [Op.startsWith]: 'Fir',
        //     }
        // }
        where: {
            // name: {
            //     $iLike: '%'+ name
            // }
            name: {
                [Op.like]: name + "%"
            }
        }
    })
    console.log(organisations)

    res.status(200).send(organisations)
}

module.exports = {addOrganisation,getOrganisations,getOrganisation,updateOrganisation,deleteOrganisation,searchOrganisation}