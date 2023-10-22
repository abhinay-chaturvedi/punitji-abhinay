const login = async (payload) => {
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Accept": "applicaton/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const result = await res.json();
        console.log("result in service file", result);
        return result;
    } catch(err) {
        return err;
    }
}
export default login;