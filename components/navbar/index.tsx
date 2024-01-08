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
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { Divider, NoSsr, Stack } from "@mui/material";
import { useInfoStore } from "@/zustand/auth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["Home"];

export default function ResponsiveAppBar() {
  const router = useRouter();
  const { email, picture } = useInfoStore();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <NoSsr>
      <AppBar position='fixed' sx={{ background: "white" }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              onClick={() => router.push("/")}
              variant='subtitle2'
              className='text-white rounded-full bg-black h-[50px] w-[50px] hidden lg:flex items-center justify-center cursor-pointer'
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
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
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => router.push("/")}
                  sx={{ my: 2, display: "block" }}
                >
                  <Typography className='text-[#2A4B6A] underline'>
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {picture == "" ? (
                <button
                  onClick={() => router.push("/signin")}
                  className='bg-[#2A4B6A] rounded-3xl p-2 w-[100px] font-bold'
                >
                  Signin
                </button>
              ) : (
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src={picture || ""} />
                  <ArrowDropDownIcon sx={{ color: "#2A4B6A" }} />
                </IconButton>
              )}
              <Menu
                sx={{ mt: "45px" }}
                id='menu-appbar'
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
                <Box sx={{ width: 200, p: 2 }}>
                  <Stack flexDirection={"column"} alignItems={"center"}>
                    <Avatar src={picture || ""} />
                    <Typography mt={1}>{email || ""}</Typography>
                  </Stack>
                  <Divider sx={{ mt: 2, mb: 2, background: "#142B41" }} />

                  <Typography color='#142B41' fontWeight={700}>
                    Profile
                  </Typography>
                  <Typography color='#142B41' fontWeight={700}>
                    Logout
                  </Typography>
                </Box>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </NoSsr>
  );
}
