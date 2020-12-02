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
    delete: async (token, username, id, imgKey) => {
        // Had to use non-alias version since alias version wasn't sending headers
        // for some reason...
        let res = await axios({
            method: "delete",
            url: "http://localhost:5000/api/users/" + username + "/pets/" + id,
            data: {
                imgKey: imgKey
            },
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return res;
    },
    put: async (token, username, id, name, birthdate, description, imgFile, petImgKey) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("birthdate", birthdate);
        formData.append("description", description);
        formData.append("imgFile", imgFile);
        formData.append("petImgKey", petImgKey);

        let res = await axios.put("http://localhost:5000/api/users/" +
            username + "/pets/" + id,
            formData, {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        return res;
    }
}

export default petService;