import axios from 'axios';
import { apiBaseUrl } from "../config/env.dev";

const handleErrors = (error) => {
    alert(error + "\nSee log for more info");
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
}

const petService = {
    getAll: async (token, username) => {
        const result = await axios.get(apiBaseUrl + username + "/pets", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(res => {
            return res;
        }).catch(err => {
            handleErrors(err);
            return err;
        });

        return result;
    },
    post: async (token, username, pet) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(pet)) {
            formData.append(key, value);
        }

        let res = await axios.post(apiBaseUrl + username + "/pets",
            formData, {
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'multipart/form-data'
            }
        }).catch(err => handleErrors(err));

        return res;
    },
    delete: async (token, username, pet) => {
        // Had to use non-alias version since alias version wasn't sending headers
        // for some reason...
        let res = await axios({
            method: "delete",
            url: apiBaseUrl + username + "/pets/" + pet._id,
            data: {
                imgKey: pet.imgKey
            },
            headers: {
                Authorization: "Bearer " + token
            }
        }).catch(err => handleErrors(err));

        return res;
    },
    put: async (token, username, pet) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(pet)) {
            formData.append(key, value);
        }

        let res = await axios.put(apiBaseUrl +
            username + "/pets/" + pet._id,
            formData, {
            headers: {
                Authorization: "Bearer " + token,
                'Content-Type': 'multipart/form-data'
            }
        }).catch(err => handleErrors(err));

        return res;
    }
}

export default petService;