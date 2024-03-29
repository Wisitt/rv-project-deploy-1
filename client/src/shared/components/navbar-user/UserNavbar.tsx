import React, { useState, MouseEvent, useEffect, useRef } from "react";
import {
  Button,
  Avatar,
  Box,
  Typography,
  Stack,
  Container,
  List,
} from "@mui/joy";
import { MenuItems, MenuItemLinks } from "../../../styles/navbar-user";
import "./UserNavbar.scss";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import { toast } from "sonner";
import theme from "../../../styles/theme";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";

import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import UserService from "../../../auth/service/UserService";
import {
  Main,
  MenuItemContainer,
} from "../navbar/NavbarStyled";
import '../navbar/Hamburger.scss'
import {
  HeaderNav,
  MenuItemLinksNav,
  MenuItemsNav,
  SidebarUser,
  IconButtonUser,
  CardStyleUser,
  LayoutUser,
  LeftUser,
  MenuContainer
} from "./UserSidebarStyle";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
import HomeUser from "../../../pages/user/index";
import LogoRmutp from '../../../img/logo.png'

interface LayoutState {
  leftOpen: boolean;
  rightOpen: boolean;
  selectedTab: string;
  anchorEl: null | HTMLElement;
}

const UserProfileSidebar: React.FC = () => {
  const navigate = useNavigate();

  const [state, setState] = useState<LayoutState>({
    leftOpen: !performance.navigation.type,
    rightOpen: true,
    selectedTab: "Team",
    anchorEl: null,
  });

  const handleMenuClick = (event: MouseEvent<HTMLDivElement>) => {
    setState({ ...state, anchorEl: event.currentTarget });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClose = () => {
    setState({ ...state, anchorEl: null });
  };

  const toggleSidebar = (event: MouseEvent<HTMLDivElement>) => {
    const parentNode = event.currentTarget.parentNode as HTMLElement | null;
    if (parentNode) {
      const key = `${parentNode.id}Open` as keyof LayoutState;
      setState((prevState) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    }
  };

  const handleTabChange = (tab: string) => {
    setState((prevState) => ({
      ...prevState,
      selectedTab: tab,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("account_role");
    navigate("/");
    toast.success("Logout Successful");
  };

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 1500;
      if (isSmallScreen && state.leftOpen) {
        setState((prevState) => ({
          ...prevState,
          leftOpen: false,
        }));
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [state.leftOpen]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event: Event) => {
      const mouseEvent = event as unknown as MouseEvent;
      if (
        state.anchorEl &&
        !state.anchorEl.contains(mouseEvent.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [state.anchorEl, handleClose]);

  const leftOpen = state.leftOpen ? "open" : "closed";
  const [userProfile, setUserProfile] = useState({
    firstname: "",
    user_img_path: "null",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profileData = await UserService.fetchUserProfile();
      setUserProfile(profileData);
    };

    fetchUserProfile();
  }, []);

    const ColorSchemeToggle = () => {
      const { mode, setMode } = useColorScheme();
      const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return (
      <IconButtonUser
        id="toggle-mode"
        color="neutral"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        sx={{
          zIndex: 2,
          boxShadow: "none",
          marginBottom: 2,
          width:'30px',
          "&:hover": {
            transform: "scale(1.4)",
          }
        }}
        
      >
        {mode === "light" ? (
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Star.webp" alt="Star" width="25" height="25" />
        ) : (
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Sun.webp" alt="Sun" width="25" height="25" />
        )}
      </IconButtonUser>
    );
  }

  const materialTheme = materialExtendTheme();
  const handleHamburgerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    toggleSidebar(event);
  };
  

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const UserSidebarData = [
    {
        isShow: true,
        title: 'Reservation',
        path: 'room-user',
        icon:'<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp" alt="Books" width="25" height="25" />',
        // icon: <Icon icon="fluent-mdl2:reservation-orders" color="#235726" />
    },
    {
        isShow : localStorage.getItem('type') === 'teacher',
        title: 'Classroom',
        path: 'classroom-user',
        icon:'<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp" alt="Books" width="25" height="25" />',
        // icon: <Icon icon="ph:user-list-fill" color="#3F51B5"  />
    },
    {
        isShow: true,
        title: 'Reservation Status',
        path: 'status-user',
        icon:'<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp" alt="Books" width="25" height="25" />',
        // icon: <Icon icon="fluent-mdl2:sync-status-solid" color="#0077B2" />
    },
    {
        isShow: true,
        title: 'Reported Status',
        path: 'report-user',
        icon:'<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp" alt="Books" width="25" height="25" />',
        // icon: <Icon icon="fluent-mdl2:report-warning" color="red"  />
    }
]

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <LayoutUser
          id="layout"
          data-left={state.leftOpen ? "open" : "closed"}
          style={{ position: "relative" }}
        >
          {isMobile && (
            <LeftUser id="left" className={state.leftOpen ? "open" : "closed"}>
              <div className="icon" onClick={handleHamburgerClick}>
                <div className={`hamburger ${state.leftOpen ? 'is-active' : ''}`} onClick={toggleSidebar}>
                    <div className="hamburger__container">
                      <div className="hamburger__inner"></div>
                      <div className="hamburger__hidden"></div>
                    </div>
                  </div>
              </div>
              <SidebarUser className={`sidebar ${leftOpen}`}>
                <div style={{width:"100%"}}>
                  <div className="logo-header d-flex justify-content-center ">
                    <Link to="/user">
                      <img src={LogoRmutp} alt=""  style={{width:"60px", height:"50px"}}/>
                    </Link>
                  </div>
                </div>
                <Container className="content">
                {UserSidebarData.map((item, index) => (
                  <>
                  {item.isShow && (
                  <MenuItems key={index}>
                    <MenuItemLinks
                      to={item.path}
                      onClick={() => handleTabChange(item.title)}
                    >
                      <span className="icon-active" dangerouslySetInnerHTML={{__html: item.icon}}></span>
                      <Typography
                        noWrap
                        level="title-sm"
                        style={{ marginLeft: "16px" }}
                      >
                        {item.title}
                      </Typography>
                    </MenuItemLinks>
                  </MenuItems>
                  )} 
                  </>
                ))}
                </Container>
              </SidebarUser>
            </LeftUser>
          )}
          <Main id="main">
            <HeaderNav>
              <div className="mx-auto  max-w-7xl flex items-center justify-between h-[--header-height] pb-3">
                <Box sx={{ flexGrow: 0,}}>
                  <span></span>
                </Box>
                {!isMobile && (
                  <>
                    <Box sx={{ flexGrow: 0,}}>
                      <div className="lg:flex-1 flex items-center">
                          <Link to="/user">
                          <img src={LogoRmutp} alt=""  style={{width:"60px", height:"50px"}}/>
                          </Link>
                      </div>
                    </Box>
                    <Box
                      component="nav"
                      sx={{ flexGrow: 0,}}
                    >
                      <List role="menubar" orientation="horizontal">
                        {UserSidebarData.map((item, index) => (
                          <>
                          {item.isShow && (
                            <MenuItemsNav  key={index}>
                            <MenuItemLinksNav
                              to={item.path}
                              onClick={() => handleTabChange(item.title)}
                            >
                              <Typography
                                noWrap
                                level="title-sm"
                              >
                                {item.title}
                              </Typography>
                              <span className="icon-active" dangerouslySetInnerHTML={{__html: item.icon}}></span>

                            </MenuItemLinksNav>
                          </MenuItemsNav>
                          )} 
                          </>
                        ))}
                      </List>
                    </Box>
                  </>
                )}
                
                <div className="flex items-center justify-content-end gap-1.5">
                  <Box sx={{width:"20px", marginTop:2}}>
                    <ColorSchemeToggle />
                  </Box>
                  <CardStyleUser onClick={handleMenuClick}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar variant="solid" src={userProfile.user_img_path}>
                        {userProfile.firstname.substring(0, 1)}
                      </Avatar>
                      <Stack spacing={0.4} sx={{ marginLeft: 2 }}>
                        <Typography
                          fontWeight="bold"
                          level="title-sm"
                          sx={{ paddingRight: 2 }}
                        >
                          {userProfile.firstname}
                        </Typography>
                      </Stack>
                    </Box>
                  </CardStyleUser>
                  <MenuContainer
                    id="profile-menu"
                    anchorEl={state.anchorEl}
                    open={Boolean(state.anchorEl)}
                    sx={{ width: 130 }}
                    ref={menuRef}
                  >
                    <MenuItemContainer
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        color="danger"
                        variant="solid"
                        fullWidth
                        onClick={handleLogout}
                      >
                        Logout
                      </Button>
                    </MenuItemContainer>
                  </MenuContainer>
                </div>
              </div>
            </HeaderNav>
            <div>
              <Outlet></Outlet>
              <Routes>
                <Route path="/" element={<HomeUser />} />
              </Routes>
            </div>
          </Main>
        </LayoutUser>
      </CssVarsProvider>
    </MaterialCssVarsProvider>
  );
};

export default UserProfileSidebar;
