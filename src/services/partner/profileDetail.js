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
