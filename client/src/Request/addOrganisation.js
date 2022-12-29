import axios from "axios";

const addOrganisation = async (organisation) => {
    const response = await axios.post(`http://localhost:8080/api/organisations/add` , organisation );
    console.log(response);
}

export default addOrganisation