import { SectionHeadingProps } from "@/utils/interface/componetsProps/SectionHeadingProps";
import { Box, Stack, Typography } from "@mui/material";

export default function SectionHeading({ heading = "Section Header", description, position = "center", sx }: SectionHeadingProps) {
  return (
    <>
      <Stack
        direction="column"
        alignItems={{ xs: "center", md: position === "center" ? "center" : "flex-start" }}
        justifyContent={{ xs: "center", md: "flex-start" }}
        spacing={0.5}
        sx={{ pt: 4, pb: 4, color: "text.primary", ...sx }}
      >
        <Box component="div" sx={{ width: 40, height: 3.5, bgcolor: "primary.main" }} />
        <Typography
          variant="h2"
          sx={{
            display: "block",
            fontWeight: 500,
            fontSize: 30,
            letterSpacing: 1.2,
            color: "inherit",
          }}
        >
          {heading}
        </Typography>
        {description && (
          <Typography
            variant="subtitle1"
            sx={{
              pt: 2,
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: { xs: "100%", md: "60%" },
              color: "inherit",
              textAlign: { xs: "center", md: position === "center" ? "center" : "left" },
            }}
          >
            {description}
          </Typography>
        )}
      </Stack>
    </>
  );
}
