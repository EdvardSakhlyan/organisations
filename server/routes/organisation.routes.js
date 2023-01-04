const {
    getOrganisations,
    getOrganisation,
    addOrganisation,
    deleteOrganisation,
    updateOrganisation,
    searchOrganisation
} = require("../controllers/organisation.controller");


const router = require("express").Router()

router.post('/add',addOrganisation)
router.get('/all',getOrganisations)
router.get('/find',searchOrganisation)
router.get('/:id',getOrganisation)
router.put('/:id',updateOrganisation)
router.delete('/:id',deleteOrganisation)


module.exports = router
