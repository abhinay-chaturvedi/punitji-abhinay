import Australia from "@/components/visa/Australia";
import Canada from "@/components/visa/Canada";
import Germany from "@/components/visa/Germany";
import Uae from "@/components/visa/Uae";
import Uk from "@/components/visa/Uk";
import Usa from "@/components/visa/Usa";
import { Box, Container, Typography } from "@mui/material"

const Page = ({params}) => {
    console.log(params);
    return (
        <Box>
            <Container>
                <Box>
                    <Typography sx={{fontWeight: "bold",textTransform: "uppercase", textAlign: "center", fontSize: "25px", marginY: "10px"}}>{params.country}</Typography>
                </Box>
                {params.country === "canada"?<Canada/>:null}
                {params.country === "australia"?<Australia/>:null}
                {params.country === "usa"? <Usa/>: null}
                {params.country === "uk"? <Uk/>: null}
                {params.country === "uae"? <Uae/>: null}
                {params.country === "germany"? <Germany/>: null}
            </Container>
        </Box>
    )

}
export default Page;