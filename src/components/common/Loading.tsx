import styles from "@/styles/loading.module.css";
import { Stack } from "@mui/material";

export default function Loading() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", bgcolor: "background.primary" }}
    >
      <div className={styles.loader}>
        <svg
          className={styles.loader_star}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <polygon
            points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
            fill="#2196f3"
          />
        </svg>
        <div className={styles.loader_circles}></div>
      </div>
    </Stack>
  );
}
