import { Button, ButtonProps } from "@mui/material";
import styles from "./button.module.css";

export default function BtnOutlined({
  children,
  disabled = false,
  onClick,
  title,
  sx,
}: ButtonProps) {
  return (
    <Button
      className={styles.btnOutlined}
      variant="outlined"
      color="primary"
      sx={{
        ...sx,
        color: "primary.main",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        fontWeight: 600,
        py: 1,
        bgcolor: "white",
        "&:hover": {
          bgcolor: "white",
        },
      }}
      disableRipple
      disabled={disabled}
      onClick={onClick}
      title={title}
    >
      {children}
    </Button>
  );
}
