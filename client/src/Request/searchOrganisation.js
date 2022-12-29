import axios from "axios";

export const searchOrganisations = async (setState , name , setTotalCount) => {
    const response = await axios.get(`http://localhost:8080/api/organisations/find?name=${name}`);
    const {data , headers} = await response;
    console.log(data)
    // if (typeof setTotalCount === "function"){
    //     setTotalCount(headers["x-total-count"])
    // }
    //
    // if (typeof setState === "function"){
    //     setState(data)
    // }
}
