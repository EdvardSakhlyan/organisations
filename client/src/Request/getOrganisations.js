import axios from "axios";


export const getOrganisations = async (setState , count , setTotalCount) => {
    const response = await axios.get(`http://localhost:8080/api/organisations/all?limit=${count}`);
    const {data , headers} = await response;
    console.log(headers)
    if (typeof setTotalCount === "function"){
        setTotalCount(headers["x-total-count"])
    }

    if (typeof setState === "function"){
        setState(data)
    }
}


