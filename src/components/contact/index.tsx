import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Banner from "./Banner";
import ContactSection from "./contact";

const Home = () => {
  const { data: session } = useSession();
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "white",
        }}
      >
        <Banner />
        <ContactSection />
      </Box>
    </>
  );
};

export default Home;
