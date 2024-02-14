"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import Link from "next/link";
import { useLogin, useLogout } from "@/hooks/auth";
import { useRouter } from "next/navigation";
import WithUserContext from "@/hocs/WithUserContext";
import { UserContext } from "@/contexts/user/context";
import { clearUser, setUser } from "@/contexts/user/action";
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery, useTheme } from "@mui/material";

const pages = [{page:"Home", url: "/"}, {page: "About", url: "/about"}, {page: "Services", url: "/services"}, {page: "Blog", url: "/blog"}, {page: "Visa", url: "/visa"}, {page: "Contact", url: "/contact-us"}];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen]= React.useState(false);
  const [loginUser, setLoginUser] = React.useState(null);
  // const logout = useLogout();
  const router = useRouter();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  // router.refresh()
  // const [isLogin, setIsLogin] = React.useState(loginUser);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("hello")
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // const loginUser = useLogin()
  const { state: userState, dispatch: dispatchUserAction } =
    React.useContext(UserContext);
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setLoginUser(user);
    if (!userState.email) {
      // dispatchUserAction(setUser(user));
    }
  }, []);

  console.log("🚀 ~ file: NavBar.jsx:56 ~ NavBar ~ userState:", userState);
  const handleLogout = async () => {
    dispatchUserAction(clearUser());
    localStorage.removeItem('user');
  }
  return (
    <AppBar sx={{ background: "white", top: 0 }} position="sticky">
      <Container sx={{ bgcolor: "white" }}>
        <Toolbar disableGutters sx={{ height: "85px" }}>
          <Box
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "gray",
              textDecoration: "none",
              position: "relative",
              width: "200px",
              height: "100%"
            }}
          >
            <Image layout="fill" objectFit="contain"  src="/images/logo.png" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsMobileMenuOpen((prev) =>!prev)}
            >
              {!isMobileMenuOpen?<MenuIcon />:
              <CloseIcon />}
            </IconButton>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={() => router.push(`${page.url}`)}>
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Box
            variant="div"
            component="div"
            sx={{
              mr: 4,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "blue",
              textDecoration: "none",
              // width: "max-content",
              position: "relative",
              width: "100px",
              height: "100%"
            }}
          >
            <Image
              onClick={() => router.push("/")}
              layout="fill"
              objectFit="contain"
              src="/images/logo.png"
              style={{borderRadius: "25px"}}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              gap: 3,
              justifyContent: "flex-end",
              marginRight: "80px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={() => router.push(`${page.url}`)}
                sx={{
                  my: 2,
                  color: "#1b2630",
                  display: "block",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                }}
              >
                {page.page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {userState.name ? (
              <Box>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, "&:hover": { bgcolor: "white" } }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", color: "#223241", mr: "10px" }}
                    >
                      {userState?.name?.slice(0, 8)}
                    </Typography>
                    <Avatar
                      alt="Abhinay"
                      sx={{
                        bgcolor: "white",
                        color: "#223241",
                        border: "2px solid #223241",
                      }}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      router.push(`${userState.role.toLowerCase()}`);
                    }}
                  >
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleLogout();
                      // window.location.href = "/"
                      // window.location.reload();
                      router.push(`/`);
                      // window.location.href = "/"
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                component={Link}
                href="/login"
                sx={{
                  background: "#fff",
                  color: "#0d172a",
                  fontWeight: 600,
                  boxShadow: "1px 1px 10px rgba(166, 175, 195, .25)",
                  p: "1rem 1.6rem",
                  borderRadius: "1.5rem",
                  border: "0px solid #e2e8f0",
                  "&:hover": {
                    backgroundColor: "#1e293b",
                    color: "#fff",
                  },
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
        {isMobileMenuOpen && mdDown &&  <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              gap: 3,
              justifyContent: "flex-end",
              // marginRight: "80px",
              // display: { xs: "none", md: "flex" },
              // ...animationIn
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.page}
                onClick={() => router.push(`${page.url}`)}
                sx={{
                  my: 2,
                  color: "#1b2630",
                  display: "block",
                  fontWeight: "600",
                  fontFamily: "sans-serif",
                  
                }}
              >
                {page.page}
              </Button>
            ))}
          </Box>}
      </Container>
    </AppBar>
  );
}
export default NavBar;
// {"@keyframes inAnimation": {
//   "0%": {
//     opacity: 0,
//     visibility: hidden;
//   },
//   "100%": {
//     opacity: 1,
//     visibility: visible;
//   }
// }
// }
// @keyframes outAnimation {
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//     visibility: hidden;
//   }
// }
// const animationIn = {
//   animation: "inAnimation 1s linear",
//   "@keyframes inAnimation": {
//     "0%": {
//       height: "0px",
//       opacity: 0,
//       visibility: "hidden"
//     },
//     "100%": {
//       opacity: 1,
//     visibility: "visible",
//     height: "300px"
//     },
//   },
// };