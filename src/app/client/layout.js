// "use client"
import NavBar from "@/components/NavBar/NavBar"
import UserContextProvider from "@/contexts/user/context"
// import UserContextProvider from "@/contexts/user/context"
// import { cookies } from 'next/headers'
export const metadata = {
  title: 'Welcome Client!',
  description: 'Welcome client!',
}

export default function DashboardLayout({ children }) {
  console.log("here is server component in user layourt")
  // const token = cookies().get("token");
  // console.log("hello from the this side", token) 
  return (
    <div>
        <NavBar/>
        <div>
          {children}
        </div>
    </div>
  )
}
