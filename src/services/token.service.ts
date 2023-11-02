import secureLocalStorage from "react-secure-storage";
import {USER_NAME_STORAGE_KEY} from "@/shared/utils/constants";
import {JSONParse} from "@/shared/utils/utils";

const getLocalRefreshToken = () => {
    const user = JSONParse(secureLocalStorage.getItem(USER_NAME_STORAGE_KEY));
    return user?.refreshToken;
}

const getLocalAccessToken = () => {
    const user = JSONParse(secureLocalStorage.getItem(USER_NAME_STORAGE_KEY));
    return user?.accessToken;
}

const updateLocalAccessToken = (token: string) => {
    let user = JSONParse(secureLocalStorage.getItem(USER_NAME_STORAGE_KEY));
    user.accessToken = token;
    secureLocalStorage.setItem(USER_NAME_STORAGE_KEY, user);
}

const getUserData = () => {
    return JSONParse(secureLocalStorage.getItem(USER_NAME_STORAGE_KEY));
}

const setUserData = (user: any) => {
    secureLocalStorage.setItem(USER_NAME_STORAGE_KEY, user);
}

const updateUserData = (object: any) => {
    let user = JSONParse(secureLocalStorage.getItem(USER_NAME_STORAGE_KEY));
    secureLocalStorage.setItem(USER_NAME_STORAGE_KEY, {...user, ...object});
}

const removeUserData = () => {
    secureLocalStorage.removeItem(USER_NAME_STORAGE_KEY);
}

export default {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUserData,
    setUserData,
    updateUserData,
    removeUserData
}
