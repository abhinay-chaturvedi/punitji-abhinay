const { createContext, useReducer } = require("react");
const { default: userReducer } = require("./reducer");

const intialState = {
    email: null,
    name: null,
    role: null,
    id: null
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