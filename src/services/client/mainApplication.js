const saveApplication = async (data) => {
    try {
        const res = await fetch("/api/client/mainApplication", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        return result;
    } catch(err) {
        console.log("🚀 ~ file: mainApplication.js:5 ~ saveApplication ~ err:", err)
        return err;
    }
}
const getApplicationDetail = async (userId) => {
    try {
        const res = await fetch(`/api/client/mainApplication?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        const result = await res.json();
        return result;
    } catch(err) {
        console.log("🚀 ~ file: mainApplication.js:22 ~ getApplicationDetail ~ err:", err)
        return err;
    }
}
export {saveApplication, getApplicationDetail};