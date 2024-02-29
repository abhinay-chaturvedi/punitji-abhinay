const submitContactFrom = async (payload) => {
    const response = await fetch('api/submitform/SubmitContactForm',
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }
    );
     const result = await response.json();
     return result;
}
export default submitContactFrom;