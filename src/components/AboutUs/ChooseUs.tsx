import choose_us from "@/assets/images/choose-us.png";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

type Props = {};

export default function ChooseUs({}: Props) {
  return (
    <SectionWrapper bgColor="primary">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="evenly"
        spacing={{xs: 4, md: 8}}
        sx={{minHeight: "100vh" }}
      >
        <Image src={choose_us} alt="Choose US" width={550} height={400} />

        <Box>
          <SectionHeading heading="Why Choose Us" position="left" />

          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            accusamus praesentium esse itaque animi magni eum nostrum tenetur
            sed veniam dolorum deleniti quibusdam quis error eaque voluptatum,
            provident doloribus commodi?
          </Typography>

          <Typography
            variant="body1"
            sx={{ display: "block", mt: 3, color: "text.primary" }}
          >
            Asperiores accusamus praesentium esse itaque animi magni eum nostrum tenetur sed veniam dolorum deleniti
          </Typography>
        </Box>
      </Stack>
    </SectionWrapper>
  );
}
