import axios from "axios";
import {getOrganisations} from "./getOrganisations";

export const updateOrganisation = async (id , org) => await axios.put(`http://localhost:8080/api/organisations/${id}` , org);