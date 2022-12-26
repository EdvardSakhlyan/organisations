import axios from "axios";

const editOrganisation = async (id , organisation) => {
    await axios.put(`http://localhost:4000/cards/${id}` , organisation)
}

export default editOrganisation