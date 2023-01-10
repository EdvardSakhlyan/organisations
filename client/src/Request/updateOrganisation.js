import axios from "axios";

export const updateOrganisation = async (id , org) => await axios.put(`http://localhost:8080/api/organisations/${id}` , org);