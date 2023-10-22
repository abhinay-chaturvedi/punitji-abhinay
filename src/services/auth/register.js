const register = async (payload) => {
    try {
        const res = fetch("/api/auth/register", {
            method: "POST",
            headers: {
                'Accept': "application/json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify(payload)
        })
        const result = await res.json();
        return result;
    } catch(err) {
        return err;
    }
}
export default register;