import Australia from "@/components/visa/Australia";
import Canada from "@/components/visa/Canada";
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
            </Container>
        </Box>
    )

}
export default Page;