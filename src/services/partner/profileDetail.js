export const getPartnerDetail = async (userId) => {
    try {
        const res = await fetch(`/api/partner/profileDetail?userId=${userId}`, {
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
export const updatePartnerDetail = async (data) => {
    try {
        const res = await fetch("/api/partner/profileDetail", {
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
        console.log("🚀 ~ file: profileDetail.js:20 ~ updatePartnerDetail ~ err:", err)
        return err;
    }
}
