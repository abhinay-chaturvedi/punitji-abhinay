// "use client"
import NavBar from "@/components/NavBar/NavBar"
import { Box } from "@mui/material"

export const metadata = {
  title: 'Welcome Partner!',
  description: 'Welcome partner!',
}

export default function DashboardLayout({ children }) {
  // console.log("hello from partner dashboard layout")
  return (
    <Box>
        <NavBar/>
        <div>
        {children}
        </div>
    </Box>
  )
}
