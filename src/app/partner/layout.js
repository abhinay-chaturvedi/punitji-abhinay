"use client"
import NavBar from "@/components/NavBar/NavBar"
import { Scrollbar } from "@/components/scrollbar"
import UserContextProvider from "@/contexts/user/context"

export const metadata = {
  title: 'Welcome Partner!',
  description: 'Welcome partner!',
}

export default function DashboardLayout({ children }) {
  return (
    <UserContextProvider>
        <NavBar/>
        <div>
        {children}
        </div>
    </UserContextProvider>
  )
}
