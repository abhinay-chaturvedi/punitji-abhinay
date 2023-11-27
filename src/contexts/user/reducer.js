const SET_USER = "SET_USER";
const SET_DOCUMENTS = "SET_DOCUMENTS";
const CLEAR_USER = "CLEAR_USER";
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_DOCUMENTS: {
      return {
        ...state,
        documents: action.payload,
      };
    }
    case CLEAR_USER: {
      return {
        ...state,
        name: null,
        email: null,
        role: null,
      }
    }
    default: {
      return state;
    }
  }
};
export default userReducer;
