import axios from "axios";

const addOrganisation = async (organisation) => await axios.post(`http://localhost:8080/api/organisations/add` , organisation )

export default addOrganisation