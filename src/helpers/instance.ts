import axios, { AxiosRequestConfig } from "axios";
import {tokenService} from "@/services/index";
import {STATUS_401, STATUS_403, STATUS_500} from "@/shared/utils/constants";
import {signOut} from "next-auth/react";
import Router from "next/router";
import {isNullOrEmpty} from "@/shared/utils/utils";

const url = typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_ROOT_URL
    : window.location.origin

const rootPath: string = "auth";
const signInPath: string = `${rootPath}/sign-in`;

const instance = axios.create({
    baseURL: `${url}/api/`,
    headers: {"Content-Type": "application/json"}
});

instance.interceptors.request?.use((config: any) => {
        const token = tokenService.getLocalAccessToken();
        if (token) config.headers["x-access-token"] = token;

        return config;
    }, (error) => Promise.reject(error)
);

async function removeUser(err: any) {
    const {status} = err.response;
    if ((status === STATUS_403) || (status === STATUS_500)) clearSession();

    return Promise.reject(err);
}

function clearSession() {
    signOut({redirect: false}).then(() => {
        tokenService.removeUserData();
        Router.push("/"); /** Redirect to the home page after signing out */
    });
}

async function refreshToken(originalConfig: any) {
    originalConfig._retry = true;

    try {
        // const localRefreshToken = tokenService.getLocalRefreshToken();
        // if (localRefreshToken) {
            // const resp = await instance.post<SignInResponse, SignInResponse>("auth/refresh-token", {
            //     refreshToken: localRefreshToken,
            // });
            //
            // const {token} = resp;
            // tokenService.updateLocalAccessToken(token);

            return instance(originalConfig);
        // }

        // if (isNullOrEmpty(localRefreshToken)) clearSession();

    } catch (_error) {
        return removeUser(_error);
    }
}

instance.interceptors.response?.use((res: any) => res.data,
    async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== signInPath && err.response) {
            /** Access Token was expired */
            if (err.response.status === STATUS_401 && !originalConfig._retry) {
                return await refreshToken(originalConfig);
            }
        }

        return Promise.reject(err);
    }
);

export default instance;
