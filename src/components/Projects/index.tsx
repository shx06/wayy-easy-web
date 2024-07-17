import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Banner from "./Banner";
import Services from "./Services";

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
        <Services />
        {/* <Facts />
        <Teams />
        <Testimonials /> */}
      </Box>
    </>
  );
};

export default Home;
