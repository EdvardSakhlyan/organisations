import axios from "axios";

const addOrganisation = async (organisation) => {
    const response = await axios.post(`http://localhost:4000/cards` , organisation , {
        transformResponse: [function (data) {
            // Делайте все, что хотите, чтобы преобразовать данные
            console.log(data)
            return data;
        }],
    });
    console.log(response);
}

export default addOrganisation