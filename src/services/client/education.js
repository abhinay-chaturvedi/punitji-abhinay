const saveEducationDetail = async (data) => {
    try {
        const res = await fetch("api/client/education", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "applicaton/json"
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        return result;
    } catch(err) {
        console.log("🚀 ~ file: education.js:5 ~ saveEducationDetail ~ err:", err)
        return err;
    }
}
const getEducationDetail = async (userId) => {
    try {
        const res = await fetch(`api/client/education?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        const result = await res.json();
        return result;
    } catch(err) {
        console.log("🚀 ~ file: education.js:20 ~ getEducationDetail ~ err:", err)
        return err;
    }
}
export {saveEducationDetail, getEducationDetail}