const getWorkExperience = async (userId) => {
    try {
        const res = await fetch(`/api/user/workExperience?userId=${userId}`, {
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

const saveWorkExperience = async (data) => {
    try {
        const res = await fetch("/api/user/workExperience", {
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

export { saveWorkExperience, getWorkExperience };