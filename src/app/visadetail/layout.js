import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar/NavBar"
import { Box } from "@mui/material"
import VisaBar from "./_components/VisaBar"

export const metadata = {
    title: "Countries and visas",
    description: "Countries and visas full details"
}
const VisaDetailLayout = ({children}) => {
    return (
        <Box>
            <NavBar/>
            <VisaBar/>
            {children}
            <Footer/>
        </Box>
    )
}
export default VisaDetailLayout;