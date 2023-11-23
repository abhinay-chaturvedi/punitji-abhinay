const saveLanguageTest = async (data) => {
    try {
        const res = await fetch("/api/user/languageTest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        return result;
    } catch(err) {
        return err;
    }
}
const getLanguageTest = async (userId) => {
    try {
        const res = await fetch(`/api/user/languageTest?userId=${userId}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        const result = await res.json();
        return result;
    } catch(err) {
        return err;
    }
}
export {saveLanguageTest, getLanguageTest};