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
    post: async (token, username, name, birthdate, description, imgFile) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("birthdate", birthdate);
        formData.append("description", description);
        formData.append("imgFile", imgFile);

        let res = await axios.post(`http://localhost:5000/api/users/` + username + "/pets",
            formData, {
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'multipart/form-data'
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