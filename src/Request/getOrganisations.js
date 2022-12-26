import axios from "axios";


export const getOrganisations = async (setState , count , setTotalCount) => {
    const response = await axios.get(`http://localhost:4000/cards?_limit=${count}`);
    const {data , headers} = await response;

    if (typeof setTotalCount === "function"){
        setTotalCount(headers["x-total-count"])
    }

    if (typeof setState === "function"){
        setState(data)
    }
}


