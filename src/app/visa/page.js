import Canada from "@/components/visa/Canada";
import { Box, Container, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from '@mui/icons-material/Info';
import Link from "next/link";
// import { useRouter } from "next/navigation";

// const r = "<b>hello from visas page</b><br></br>outside"
const Page = () => {
  // const router = useRouter()
  return (
    <Box>
      <Container>
        {/* <Canada/> */}
        <Box>
            <Typography sx={{fontWeight: "bold", fontSize: "25px", marginY: "10px", textAlign: "center"}}>
            Visa Solution
            </Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <Box sx={{ display: "flex", bgcolor: "whitesmoke",p: "4px 7px", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
            <Typography>Canada</Typography>
            <IconButton component={Link} href={`/visa/canada`}>
              <InfoIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "whitesmoke",p: "4px 7px", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
            <Typography>Australia</Typography>
            <IconButton component={Link} href={`/visa/australia`}>
              <InfoIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "whitesmoke",p: "4px 7px", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
            <Typography>USA</Typography>
            <IconButton component={Link} href={`/visa/usa`}>
              <InfoIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "whitesmoke",p: "4px 7px", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
            <Typography>UK</Typography>
            <IconButton component={Link} href={`/visa/uk`}>
              <InfoIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "whitesmoke",p: "4px 7px", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
            <Typography>UAE</Typography>
            <IconButton component={Link} href={`/visa/uae`}>
              <InfoIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "whitesmoke",p: "4px 7px", alignItems: "center", borderRadius: "5px", justifyContent: "space-between" }}>
            <Typography>Germany</Typography>
            <IconButton component={Link} href={`/visa/germany`}>
              <InfoIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Page;
