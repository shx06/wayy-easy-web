import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import Banner from "./Banner";
import ChooseUs from "./ChooseUs";
import Facts from "./Facts";
import Services from "./Services";
import Teams from "./Teams";
import Testimonials from "./Testimonials";

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
        <ChooseUs />
        <Services />
        <Facts />
        <Teams />
        <Testimonials />
      </Box>
    </>
  );
};

export default Home;
