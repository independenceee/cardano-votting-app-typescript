import axios from "axios";

const httpRequest = axios.create({
    baseURL: process.env.MINT_TRANSACTION_BASE_URL,
    withCredentials: true,
});

export const get = async function (path: string, body = {}) {
    return httpRequest.get(`${path}`, body).then(({ data }) => {
        return data;
    });
};

export const post = async function (path: string, body = {}) {
    return httpRequest.post(`${path}`, body).then(({ data }) => {
        return data;
    });
};

export const deleteOption = async function (path: string, body = {}) {
    return httpRequest.delete(`${path}`, body).then(({ data }) => {
        return data;
    });
};

export default httpRequest;
