export const onShowLoading = (show: boolean) => {
    let element = document.getElementById("preloader");
    if (element) element.style.display = show ? "block" : "none";
};

export function JSONParse(data: any) {
    return data ? JSON.parse(JSON.stringify(data)) : {};
}

export function isNullOrEmpty(value: any) {
    return value === null || value === undefined || value === "";
}

export function isNullOrEmptyOrZero(value: any) {
    return value === null || value === undefined || value === "" || Number(value) === 0;
}
