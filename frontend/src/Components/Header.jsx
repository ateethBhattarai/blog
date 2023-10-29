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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UsersContext } from "../ContextAPI/UserContext";

const pages = ["login", "register"];

function Header() {
  const { setUser, user } = React.useContext(UsersContext);

  const navigate = useNavigate();

  const loadUserData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/current", {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (error) {
      // alert(error.message);
      console.log(error);
    }
  };
  React.useEffect(() => {
    loadUserData();
  }, []);

  const logoutUser = async () => {
    try {
      await axios.post(
        "http://localhost:8000/logout",
        {},
        { withCredentials: true }
      );
      setUser("");
    } catch (error) {
      console.log(error);
    }
  };

  const settings = [
    {
      name: "Create blog",
      method: () => {
        navigate("/create");
      },
    },
    { name: "Profile", method: "s" },
    { name: "Dashboard", method: "s" },
    {
      name: "Logout",
      method: () => {
        logoutUser();
      },
    },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ position: "sticky", top: 0, zIndex: 100 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          {!user?.email ? (
            <>
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
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
                    <Link className="link " key={page} to={`/${page}`}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>

              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "end",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <Link className="link link_hover" key={page} to={`/${page}`}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
              </Box>
            </>
          ) : (
            <Box sx={{ flexGrow: 0, ml: "auto" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={user.username}
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
                {settings.map((setting) => (
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Button type="submit" onClick={setting.method}>
                        {setting.name}
                      </Button>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
