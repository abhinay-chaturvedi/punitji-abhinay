import prisma from "@/prisma/connect";
import Query from "./Query";

const { Box, Typography, Container } = require("@mui/material")





const Page =  async () => {
    const prismaResult = await prisma.query.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    // console.log("result of prisma result in queries page", prismaResult)
    return (
        <Box>
            <Container>
                <Box>
                    <Typography>Queries</Typography>
                </Box>
                <Box>
                    {
                        prismaResult?.map((item, index) => {
                            return (
                                <Query item={item} key={item.id}/>
                            )
                        })
                    }
                </Box>
            </Container>
        </Box>
    )
}
export default Page;