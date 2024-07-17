import logoMini from "@/assets/images/logo.png";
import useThemeMode from "@/hooks/useThemeMode";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Stack,
  Typography,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import BtnPrimary from "../button/BtnPrimary";
import navLinks from "./navLinks";

type IProps = {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => (event: any) => void;
};

const MobileNavbar = ({ drawerOpen, toggleDrawer }: IProps) => {
  const { themeMode, toggleThemeMode } = useThemeMode();
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        backgroundColor:
          themeMode === "dark"
            ? "rgba(24, 31, 41, 0.5)"
            : "rgba(243, 245, 255, 0.5)",
        backdropFilter: "blur(10px) brightness(0.8)",
      }}
    >
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        sx={{
          width: 300,
          height: "100vh",
          bgcolor: "background.primary",
        }}
      >
        <MuiLink
          component={Link}
          href="/"
          sx={{ display: "block", textAlign: "center", mt: 5 }}
        >
          <Image src={logoMini} alt="Webserv" width={50} height={30} />
        </MuiLink>

        <List sx={{ mt: 5 }}>
          {navLinks?.map((item, i) => (
            <ListItem key={i} component={Button} sx={{ color: "text.primary" }}>
              <Link href={item.href} passHref>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem>
          ))}
        </List>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          spacing={2}
          sx={{ px: 2, mb: 2 }}
        >
          <Typography
            sx={{
              textAlign: "left",
            }}
          >
            {themeMode === "light" ? "Dark Mode" : "Light Mode"}
          </Typography>

          <IconButton
            edge="end"
            sx={{ color: "text.primary" }}
            onClick={toggleThemeMode}
          >
            {themeMode === "light" ? <BsSunFill /> : <BsFillMoonFill />}
          </IconButton>
        </Stack>

        <Stack direction="row" justifyContent="center">
          {session?.user ? (
            <BtnPrimary
              sx={{ px: 4, mx: "auto", width: "95%" }}
              onClick={() => signOut()}
            >
              LogOut
            </BtnPrimary>
          ) : (
            <BtnPrimary
              sx={{ px: 4, mx: "auto", width: "95%" }}
              onClick={() => router.push("/login")}
            >
              Login
            </BtnPrimary>
          )}
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MobileNavbar;
