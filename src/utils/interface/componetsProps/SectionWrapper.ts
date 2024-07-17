import { SxProps } from "@mui/material";

export interface SectionWrapperProps {
  children: React.ReactNode;
  bgColor?: "gradient" | "primary" | "secondary";
  container?: boolean;
  sx?: SxProps;
}