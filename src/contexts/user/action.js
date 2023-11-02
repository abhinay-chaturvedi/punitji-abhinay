const SET_USER = "SET_USER";
const SET_DOCUMENTS = "SET_DOCUMENTS";
export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload: payload
    }
}

export const setUserDocuments = (payload) => {
    return {
        type: SET_DOCUMENTS,
        payload: payload
    }
}