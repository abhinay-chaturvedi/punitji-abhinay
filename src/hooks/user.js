import { UserContext } from "@/contexts/user/context"
import { useContext } from "react"

const user = useContext(UserContext)
export const userContext = () => {
    return user;
}