import axios from "axios";

const io = require('socket.io-client');

const url: string | undefined = typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_ROOT_URL
    : window.location.origin;

const defaultBaseURL: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const apiKey: string | undefined = process.env.NEXT_PUBLIC_API_KEY;
const systemName: string | undefined = process.env.NEXT_PUBLIC_SYSTEM_NAME;
const owner: string | undefined = process.env.NEXT_PUBLIC_OWNER;

const getAuthorization = (headers: any) => {
    return headers['x-access-token'] ?? '';
}

const get = (curUrl: string, request: any, baseURL?: string) => {
    const {headers, query} = request;

    return axios.get(curUrl, {
        baseURL: baseURL ?? defaultBaseURL,
        headers: {
            Authorization: getAuthorization(headers),
            'Content-Type': 'application/json',
            "x-api-key": `${apiKey}`,
            "system-name": `${systemName}`,
            "owner": `${owner}`
        },
        params: {...query}
    });
}

const post = (curUrl: string, request: any, baseURL?: string) => {
    const {headers, body} = request;

    return axios.post(curUrl, body, {
        baseURL: baseURL ?? defaultBaseURL,
        headers: {
            Authorization: (body?.refreshToken ?? getAuthorization(headers)),
            'Content-Type': 'application/json',
            "x-api-key": `${apiKey}`,
            "system-name": `${systemName}`,
            "owner": `${owner}`
        }
    });
}

const put = (curUrl: string, request: any, baseURL?: string) => {
    const {headers, body} = request;

    console.log("*url*", baseURL)
    return axios.put(curUrl, body, {
        baseURL: baseURL ?? defaultBaseURL,
        headers: {
            Authorization: getAuthorization(headers),
            'Content-Type': 'application/json',
            "x-api-key": `${apiKey}`,
            "system-name": `${systemName}`,
            "owner": `${owner}`
        }
    });
}

const _delete = (curUrl: string, request: any, baseURL?: string) => {
    const {headers, query} = request;

    return axios.delete(curUrl, {
        baseURL: baseURL ?? defaultBaseURL,
        headers: {
            Authorization: getAuthorization(headers),
            'Content-Type': 'application/json',
            "x-api-key": `${apiKey}`,
            "system-name": `${systemName}`,
            "owner": `${owner}`
        },
        params: {...query}
    });
}

const getSocketIO = (token: string) => {
    return io.connect(url, {
        path: '/socket.io',
        extraHeaders: {
            Authorization: token ?? '',
            'Content-Type': 'application/json',
            "x-api-key": `${apiKey}`,
            "system-name": `${systemName}`,
            "owner": `${owner}`
        }
    });
}

export default {
    get,
    post,
    put,
    delete: _delete,
    getSocketIO
}
