import WithAuthGaurd from "@/hocs/WithAuthGaurd";
import UserContextProvider from "./context";

const UserContextWithAuthGaurd = WithAuthGaurd(UserContextProvider);
export default UserContextWithAuthGaurd;