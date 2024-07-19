import choose_us from "@/assets/images/choose-us.png";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SectionHeading from "../common/SectionHeading";
import SectionWrapper from "../common/SectionWrapper";

type Props = {};

export default function ChooseUs({ }: Props) {
  return (
    <SectionWrapper bgColor="primary">
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="evenly"
        spacing={{ xs: 4, md: 8 }}
        sx={{ minHeight: "100vh" }}
      >
        <Image src={choose_us} alt="Choose US" width={550} height={400} />

        <Box>
          <SectionHeading heading="Why Choose Us" position="left" />

          <ul>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Industry Expertise:</b> Diverse portfolio in logistics, digital marketing, home decor, and e-commerce.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Innovative Solutions:</b> Cutting-edge technologies and strategies.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Client-Centric:</b> Tailored solutions that align with your vision.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Quality & Reliability:</b> Top-notch quality and timely delivery.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Comprehensive Services:</b> Full spectrum of web and app development services.</Typography></li>
          </ul>
        </Box>
      </Stack>
    </SectionWrapper>
  );
}
