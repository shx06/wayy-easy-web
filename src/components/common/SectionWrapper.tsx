import { SectionWrapperProps } from "@/utils/interface/componetsProps/SectionWrapper";
import { Box, Container, useTheme } from "@mui/material";

const SectionWrapper = ({
  children,
  bgColor = "primary",
  container = true,
  sx,
}: SectionWrapperProps) => {
  const theme = useTheme();
  const linearGradient: string =
    theme.palette.mode === "dark"
      ? `linear-gradient(45deg, #000 0% , #1a237e 50%, #0d47a1 100%)`
      : `linear-gradient(45deg, #1a237e 0% , #0d47a1 50%, #1565c0 100%)`;
  const solidColor: string = "background.secondary";
  return (
    <Box
      sx={{
        minHeight: { xs: "100vh", lg: "70vh" },
        py: 4,
        background: bgColor === "gradient" ? linearGradient : "transparent",
        bgcolor:
          bgColor === "primary"
            ? "background.primary"
            : bgColor === "secondary"
            ? "background.secondary"
            : "inherit",
        ...sx,
      }}
    >
      {container ? <Container maxWidth="lg">{children}</Container> : children}
    </Box>
  );
};

export default SectionWrapper;
