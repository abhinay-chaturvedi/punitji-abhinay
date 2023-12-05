import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export const metadata =  {
    title: "HHH | Services",
    description: "Services we offered!"
}
const ServicesLayout = ({children}) => {
    return (
        <Box>
            <NavBar/>
            {children}
            <Footer/>
        </Box>
    )
}
export default ServicesLayout;