const uploadfile = async (formData) => {
    // console.log("🚀 ~ file: upload.js:2 ~ uploadfile ~ formData:", formData)
    try {
        const res = await fetch("/api/document/upload", {
            method: "POST",
            // headers: {
            //     "Content-Type": "multipart/form-data"
            // },
            body: formData
        })
        const result = await res.json();
        return result;
    } catch(err) {
        console.log("🚀 ~ file: upload.js:5 ~ uploadfile ~ err:", err)
        return err;
    }
}
export  default uploadfile;