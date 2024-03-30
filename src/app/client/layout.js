// "use client"
import NavBar from "@/components/NavBar/NavBar"
import USideBar from "@/components/USideBar"
import UserContextProvider from "@/contexts/user/context"
import { Box } from "@mui/material"
// import UserContextProvider from "@/contexts/user/context"
// import { cookies } from 'next/headers'
export const metadata = {
  title: 'Welcome Client!',
  description: 'Welcome client!',
}

export default function DashboardLayout({ children }) { 
  return (
    <div>
        <NavBar/>
        <div style={{}}>
          <USideBar/>
          <Box sx={{marginLeft:{xs: "100px", sm: "150px", md: "200px", lg: "300px"}}}>
          {children}
          </Box>
        </div>
    </div>
  )
}
