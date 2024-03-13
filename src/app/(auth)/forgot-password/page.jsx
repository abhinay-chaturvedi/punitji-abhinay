import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EnterEmailFwd from "./EnterEmailFwd";

const Page = () => {
  return (
    <Box sx={{ bgcolor: "whitesmoke", minHeight: "" }}>
      <Container
        sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            bgcolor: "white",
            flexDirection: "column",
            p: "15px",
            flex: { xs: "0 0 90%", sm: "0 0 70%", md: "0 0 40%" },
            m: "auto",
            my: "auto",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <Box
            component="div"
            sx={{
              mr: 2,
              position: "relative",
              width: "200px",
              height: "50px",
            }}
          >
            <Image layout="fill" objectFit="contain" src="/images/logo.png" />
          </Box>
          
          <EnterEmailFwd />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mt: "5px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Typography sx={{ fontWeight: "bold", color: "gray" }}>
                Not Sign up?
              </Typography>
              <Button component={Link} href="/register">
                Sign Up
              </Button>
            </Box>
            {/* <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Button
                sx={{ textTransform: "capitalize" }}
                component={Link}
                href="/forgot-password"
              >
                forgot password?
              </Button>
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
