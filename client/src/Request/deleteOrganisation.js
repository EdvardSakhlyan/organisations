import axios from "axios";

export const deleteOrganisation = async (id) => await axios.delete(`http://localhost:8080/api/organisations/${id}`);