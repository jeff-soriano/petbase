import axios from 'axios';

const petService = {
    getAll: async (username) => {
        let res = await axios.get(`http://localhost:5000/api/users/` + username + "/pets");
        return res.data || [];
    },
    post: async (username, name, birthdate, decription) => {
        let res = await axios.post(`http://localhost:5000/api/users/` + username + "/pets", {
            name: name,
            birthdate: birthdate,
            description: decription
        });
        return res;
    },
    delete: async (username, id) => {
        let res = await axios.delete("http://localhost:5000/api/users/" +
            username + "/pets/" + id);
        return res;
    },
    put: async (username, id, name, birthdate, decription) => {
        let res = await axios.put("http://localhost:5000/api/users/" +
            username + "/pets/" + id, {
            name: name,
            birthdate: birthdate,
            description: decription
        });
        return res;
    }
}

export default petService;