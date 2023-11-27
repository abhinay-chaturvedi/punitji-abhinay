// "use client"
import NavBar from "@/components/NavBar/NavBar"
import { Box } from "@mui/material"

export const metadata = {
  title: 'about us',
  description: 'about us!',
}

export default function Layout({ children }) {
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
