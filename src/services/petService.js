import axios from 'axios';

const petService = {
    getAll: async (token, username) => {
        let res = await axios.get(`http://localhost:5000/api/users/` + username + "/pets", {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return res.data || [];
    },
    post: async (token, username, name, birthdate, decription) => {
        let res = await axios.post(`http://localhost:5000/api/users/` + username + "/pets", {
            name: name,
            birthdate: birthdate,
            description: decription
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return res;
    },
    delete: async (token, username, id) => {
        let res = await axios.delete("http://localhost:5000/api/users/" +
            username + "/pets/" + id, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return res;
    },
    put: async (token, username, id, name, birthdate, decription) => {
        let res = await axios.put("http://localhost:5000/api/users/" +
            username + "/pets/" + id, {
            name: name,
            birthdate: birthdate,
            description: decription
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return res;
    }
}

export default petService;