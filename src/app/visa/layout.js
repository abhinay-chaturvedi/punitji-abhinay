import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar/NavBar"
import { Box } from "@mui/material"

export const metadata = {
    title: "Countries and visas",
    description: "Countries and visas full details"
}
const VisaLayout = ({children}) => {
    return (
        <Box>
            <NavBar/>
            {children}
            <Footer/>
        </Box>
    )
}
export default VisaLayout;