import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "@/assets/images/logo-with-name.png";

import useThemeMode from "@/hooks/useThemeMode";
import {
  AppBar,
  Container,
  IconButton,
  Link as MuiLink,
  Slide,
  Stack,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import BtnOutlined from "../button/BtnOutlined";
import BtnPrimary from "../button/BtnPrimary";
import MobileNavbar from "./MobileNavbar";
import navLinks from "./navLinks";
import UserPopOver from "./userPopOver";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const NavBar = () => {
  const { themeMode, toggleThemeMode } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const isActive = (href: string) => {
    return router.pathname === href ? true : false;
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      ((event as KeyboardEvent).key === "Tab" ||
        (event as KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  // Hide Navbar on Scroll
  const HideOnScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  };

  // Track Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // User Menu PopOver
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleUserPopOver = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserPopOver = () => {
    setAnchorEl(null);
  };

  const UserMenuOpen = Boolean(anchorEl);
  const userPopOverId = UserMenuOpen ? "user-popover" : undefined;

  return (
    <>
      <HideOnScroll>
        <AppBar
          enableColorOnDark
          position="fixed"
          color="transparent"
          sx={{
            transition: "0.5s ease",
            boxShadow: scrolled ? "inherit" : "none",
            border: "none",
            backgroundColor:
              scrolled || router.pathname !== "/"
                ? "rgba(24, 31, 41, 0.6)"
                : "transparent",
            backdropFilter: scrolled ? "blur(10px) brightness(0.8)" : "none",
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              sx={{
                boxShadow: "none",
                bgcolor: "transparent",
                justifyContent: "space-between",
              }}
            >
              {/* Logo */}
              <MuiLink component={Link} href="/">
                <Image src={logo} alt="Webserv" width={150} height={30} />
              </MuiLink>

              {/* Nav Links */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={4}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {navLinks?.map((item, i) => (
                  <MuiLink
                    component={Link}
                    underline="none"
                    key={i}
                    sx={{
                      color: isActive(item.href) ? "primary.light" : "white",
                    }}
                    href={item.href}
                  >
                    {item.name}
                  </MuiLink>
                ))}
              </Stack>

              {/* Nav Right */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={3}
              >
                <IconButton
                  edge="end"
                  sx={{ color: "white" }}
                  onClick={toggleThemeMode}
                >
                  {themeMode === "light" ? <BsSunFill /> : <BsFillMoonFill />}
                </IconButton>

                {session?.user ? (
                  // ----------------- Disabled for PopOver Issue ---------------
                  // <IconButton
                  //   onClick={handleUserPopOver}
                  //   aria-describedby={userPopOverId}
                  // >
                  //   <Avatar
                  //     alt={session?.user?.name}
                  //     sx={{ width: 40, height: 40 }}
                  //   />
                  // </IconButton>

                  <BtnOutlined
                    sx={{ px: 4, display: { xs: "none", md: "block" } }}
                    onClick={() => signOut()}
                  >
                    LogOut
                  </BtnOutlined>
                ) : (
                  <BtnPrimary
                    sx={{ px: 4, display: { xs: "none", md: "block" } }}
                    onClick={() => router.push("/login")}
                  >
                    Login
                  </BtnPrimary>
                )}

                <IconButton
                  edge="end"
                  sx={{
                    mr: 2,
                    color: "white",
                    display: { xs: "block", md: "none" },
                  }}
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <HiOutlineMenuAlt3 />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Navbar */}
      <MobileNavbar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      {/* User Menu PopOver */}
      <UserPopOver
        id={userPopOverId}
        open={UserMenuOpen}
        anchorEl={anchorEl}
        onClose={handleCloseUserPopOver}
      />
    </>
  );
};

export default NavBar;
