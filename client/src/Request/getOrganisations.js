import axios from "axios";


export const getOrganisations = async (setState , organisationsCount , setTotalCount) => {
    const response = await axios.get(`http://localhost:8080/api/organisations/all?limit=${organisationsCount}`);
    const {data : {organisations , count}} = await response;
    if (typeof setTotalCount === "function"){
        setTotalCount(count)
    }

    if (typeof setState === "function"){
        setState(organisations)
    }
}


