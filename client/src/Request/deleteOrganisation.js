import axios from "axios";

export const deleteOrganisation = async (id) => {
    const response = await axios.delete(`http://localhost:4000/cards/${id}`);
    console.log(response)
    // const {data , headers} = await response;
    // console.log(response)

}