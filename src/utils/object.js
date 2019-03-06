export const stateChange = (obj1, obj2) => {
    const str1 = JSON.stringify(obj1);
    const str2 = JSON.stringify(obj2);

    return {
        defined: str1 && str2,
        changed: str1 !== str2
    }
}