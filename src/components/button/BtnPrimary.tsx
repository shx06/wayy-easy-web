import { Button, ButtonProps } from "@mui/material";
import styles from "./button.module.css";

export default function BtnPrimary({
  children,
  disabled = false,
  onClick,
  title,
  sx
}: ButtonProps  ) {
  return (
    <Button
      className={styles.btnPrimary}
      variant="contained"
      color="primary"
      sx={{
        ...sx,
        bgcolor: "primary.main",
        color: "white",
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        fontWeight: 600,
        py: 1,
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
