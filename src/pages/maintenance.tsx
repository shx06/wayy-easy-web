import logo_bg from "@/assets/images/logo-with-bg.png";
import SEO from "@/components/common/SEO";
import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function maintenance() {
  return (
    <>
      <SEO title="Maintenance | Web Serv" />
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={5}
        sx={{
          minHeight: "100vh",
          bgcolor: "background.primary",
          color: "text.primary",
          px: { xs: 2, md: 10 },
        }}
      >
        <Box width="100%" sx={{ textAlign: "center" }}>
          <Image
            src={logo_bg}
            alt="maintenance"
            priority
            width={500}
            height={500}
          />
        </Box>
        <Box>
          <Typography variant="h3" sx={{ color: "primary.main", mb: 2 }}>
            Site Under Maintenance
          </Typography>
          <Typography variant="body2">
            Sorry for the inconvenience but we&rsquo;re performing some
            maintenance at the moment. If you need to you can always{" "}
            <Link
              href="mailto:webserv23@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.light",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contact us
            </Link>
            , otherwise we&rsquo;ll be back online shortly!
          </Typography>
          <Typography sx={{ mt: 5 }}>&mdash; Team WebServ</Typography>
        </Box>
      </Stack>
    </>
  );
}
