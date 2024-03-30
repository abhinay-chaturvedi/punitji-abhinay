// "use client"
import NavBar from "@/components/NavBar/NavBar"
import USideBar from "@/components/USideBar"
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
        <USideBar/>
          <Box sx={{marginLeft:{xs: "90px", sm: "150px", md: "200px", lg: "300px"}}}>
          {children}
          </Box>
        </div>
    </Box>
  )
}
