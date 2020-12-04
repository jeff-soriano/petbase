import axios from 'axios';
import { apiBaseUrl } from "../config/env.dev";

const petService = {
    getAll: async (token, username) => {
        let res = await axios.get(apiBaseUrl + username + "/pets", {
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

        let res = await axios.post(apiBaseUrl + username + "/pets",
            formData, {
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'multipart/form-data'
            }
        })
            .catch(err => {
                alert(err + "\n You likely uploaded an invalid file type");
            });
        return res;
    },
    delete: async (token, username, id, imgKey) => {
        // Had to use non-alias version since alias version wasn't sending headers
        // for some reason...
        let res = await axios({
            method: "delete",
            url: apiBaseUrl + username + "/pets/" + id,
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

        let res = await axios.put(apiBaseUrl +
            username + "/pets/" + id,
            formData, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .catch(err => {
                alert(err + "\nYou likely uploaded an invalid file type");
            });;
        return res;
    }
}

export default petService;