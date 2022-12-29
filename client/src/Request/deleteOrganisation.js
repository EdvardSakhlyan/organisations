import axios from "axios";

export const deleteOrganisation = async (id) => {
    const response = await axios.delete(`http://localhost:8080/api/organisations/${id}`);
    console.log(response)
    // const {data , headers} = await response;
    // console.log(response)

}