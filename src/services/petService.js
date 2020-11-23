import axios from 'axios';

export default {
    getAll: async () => {
        let res = await axios.get(`http://localhost:5000/api/pets`);
        return res.data || [];
    },
    post: async (name, birthdate, decription) => {
        let res = await axios.post(`http://localhost:5000/api/pets`, {
            name: name,
            birthdate: birthdate,
            description: decription
        });
        return res;
    },
    delete: async (id) => {
        let res = await axios.delete(`http://localhost:5000/api/pets/` + id)
        return res;
    },
    put: async (id, name, birthdate, decription) => {
        let res = await axios.put(`http://localhost:5000/api/pets/` + id, {
            name: name,
            birthdate: birthdate,
            description: decription
        });
        return res;
    }
}