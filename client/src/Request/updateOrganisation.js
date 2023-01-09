import axios from "axios";
import {getOrganisations} from "./getOrganisations";

export const updateOrganisation = async (id , org) => {
    await axios.put(`http://localhost:8080/api/organisations/${id}` , org);
    // const {data} = await response;
    // // if (typeof setTotalCount === "function"){
    // //     setTotalCount(headers["x-total-count"])
    // // }
    // //
    // if (typeof setState === "function") {
    //     setState(data)
    // }

}