import choose_us_2 from "@/assets/images/about-us-2.png";
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

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="evenly"
        spacing={{ xs: 4, md: 8 }}
        sx={{ minHeight: "100vh" }}
      >
        <Box>
          {/* <SectionHeading heading="Why Choose Us" position="left" /> */}

          <ul>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Scalable Solutions:</b> Built to grow with your business.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Collaborative Approach:</b> Partnering with you every step of the way.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Proven Success:</b> Track record of successful projects and satisfied clients.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Cost-Effective:</b> Maximizing value within your budget.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Ongoing Support:</b> Dedicated support for seamless operations.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>User-Centric Design:</b> Intuitive and engaging user experiences.</Typography></li>
            <li><Typography variant="body1" sx={{ color: "text.primary" }}><b>Data-Driven Decisions:</b> Leveraging analytics to drive growth.</Typography></li>
          </ul>
        </Box>

        <Image src={choose_us_2} alt="Choose US" width={550} height={400} />
      </Stack>
    </SectionWrapper>
  );
}
