const SET_USER = "SET_USER";
const SET_DOCUMENTS = "SET_DOCUMENTS";
const userReducer = (state, action) => {
    switch(action.type) {
        case SET_USER: {
            return {
                ...state, ...action.payload
            }
        }
        case SET_DOCUMENTS: {
            return {
                ...state,
                documents: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
export default userReducer;