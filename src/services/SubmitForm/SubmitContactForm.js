const submitContactFrom = async (payload) => {
    console.log("payload of submit contact form in service file", payload)
    const response = await fetch('api/submitform/SubmitContactForm',
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }
    );
     console.log("submit form response in service file", response);
     const result = await response.json();
     console.log("submit form result in service file", result);
     return result;
}
export default submitContactFrom;