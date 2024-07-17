import banner from "@/assets/images/banner.png";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import BtnOutlined from "../button/BtnOutlined";
import SectionWrapper from "../common/SectionWrapper";

export default function Banner() {
  const theme = useTheme();
  const linearGradient: string =
    theme.palette.mode === "dark"
      ? `linear-gradient(45deg, #000 0% , #1a237e 50%, #0d47a1 100%)`
      : `linear-gradient(45deg, #1a237e 0% , #0d47a1 50%, #1565c0 100%)`;
  return (
    <>
      <SectionWrapper
        bgColor="primary"
        sx={{
          minHeight: { xs: "100vh", md: "110vh" },
          color: "white",
          display: "grid",
          placeItems: "center",
          pt: { xs: 8, md: 0 },
          position: "relative",
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: linearGradient,
            borderRadius: "0% 0% 50% 50% / 0% 0% 100% 100%",
            transform: "translateY(-40vh) scale(1.7)",
            zIndex: 0,
          },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{ pb: { xs: 20, md: 8 }, zIndex: 10, position: "relative" }}
        >
          {/* Left Side/Banner Text */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="h1" sx={{ fontWeight: 600, fontSize: { xs: 40, md: 55 } }}>
              Grow Your Business Make More Money
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 500, lineHeight: 1.4, my: 4 }}>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil aenean socada commodo molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla.
            </Typography>

            <BtnOutlined>
              <span>Learn More</span>
            </BtnOutlined>
          </Box>

          {/* Right Side/Banner Image */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: { xs: "100%", md: "50%" },
              textAlign: "center",
            }}
          >
            <Image src={banner} alt="banner" width={500} height={450} priority />
          </Box>
        </Stack>
      </SectionWrapper>
    </>
  );
}
