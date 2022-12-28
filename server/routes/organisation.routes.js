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
router.get('/:id',getOrganisation)
router.put('/:id',updateOrganisation)
router.delete('/:id',deleteOrganisation)
router.checkout('/find',searchOrganisation)

module.exports = router
