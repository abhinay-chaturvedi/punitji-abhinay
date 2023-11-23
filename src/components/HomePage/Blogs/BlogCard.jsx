import Link from 'next/link'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {Box, Stack, Typography, Button} from '@mui/material'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
const BlogCard = ({imgUrl}) => {
  return (
    <Box sx={{bgcolor: "#fff", p: "15px", borderRadius: "10px", boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%);"}}>
        <Stack gap={2}>
            <Box sx={{width: "100%", bgcolor: "#FF0000", height: "170px", borderRadius: "10px", mb: "20px", position: "relative"}}>
            <Image style={{borderRadius: "10px"}} layout={'fill'} objectFit="cover" src={imgUrl}/>
            </Box>
            <Box sx={{display: 'flex', justifyContent: "space-between"}}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3px"}}>
                    <SupervisedUserCircleIcon/>
                    <Typography>By Some one</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "3px"}}>
                    <CalendarMonthIcon/>
                    <Typography>March 12, 2023</Typography>
                </Box>
            </Box>
            <Typography component="h3" sx={{fontWeight: "bold", color: "#031F4B", fontSize: "18px"}}>
                There Are Many Variates Of Passages Alteration
            </Typography>
            <Typography component="p" sx={{color: "gray"}}>
                 At vero eos et accusamus et iusto odio ducimus qui blanditiis deleniti atque
            </Typography>
            <Button component={Link} href="#"
             sx={{
                display: "flex",
                border: "2px solid #FF0000",
                width: "max-content",
                borderRadius: "10px",
                padding: "8px 17px",
                gap: "5px",
                color: "#FF0000",
                textTransform: "capitalize",
                "&:hover": {
                    background: "#FF0000",
                    color: "#fff"
                },
                
             }}
            >
                <Typography component="p" sx={{fontWeight: "bold"}}>Read More</Typography>
                <ArrowRightAltIcon/>
            </Button>
        </Stack>
    </Box>
  )
}

export default BlogCard