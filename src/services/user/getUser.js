const getUser = async (email) => {
    try {
        const res = await fetch(`/api/user/?email=${email}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            }
        })
        const result = await res.json();
        console.log("🚀 ~ file: getUser.js:11 ~ getUser ~ result:", result)
        return result;
    } catch(err) {
        console.log("🚀 ~ file: getUser.js:5 ~ getUser ~ err:", err);
        return err;
    }
}
export default getUser;