"use client"
import NavBar from "@/components/NavBar/NavBar"
import UserContextProvider from "@/contexts/user/context"

export const metadata = {
  title: 'Welcome User!',
  description: 'Welcome User!',
}

export default function DashboardLayout({ children }) {
  return (
    <UserContextProvider>
    <div>
        <NavBar/>
        <div>
        {children}
        </div>
    </div>
    </UserContextProvider>
  )
}
