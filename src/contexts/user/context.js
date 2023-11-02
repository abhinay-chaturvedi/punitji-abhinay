const { createContext, useReducer } = require("react");
const { default: userReducer } = require("./reducer");

const intialState = {
    email: null,
    phone: null,
    role: null,
    id: null,
    profilePic: null,
    address: null,
    documents: []
}
export const UserContext = createContext(intialState);


const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, intialState);
    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;