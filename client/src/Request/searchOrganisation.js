import axios from "axios";
import {getOrganisations} from "./getOrganisations";

export const searchOrganisations = async (setState , name , count, setTotalCount) => {
    if (name !== ""){
        const response = await axios.get(`http://localhost:8080/api/organisations/find?name=${name}`);
        const {data} = await response;
        if (typeof setState === "function"){
            setState(data)
        }
    }else{
        await getOrganisations(setState,count,setTotalCount)
    }

}
