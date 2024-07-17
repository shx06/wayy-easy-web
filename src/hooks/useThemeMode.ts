import { useDispatch, useSelector } from "@/features/app/store";
import { toggleThemeMode as toggleMode } from "@/features/theme/themeSlice";
import { useCallback } from "react";
import { RootState } from "@/features/app/store";

export default function useThemeMode() {
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state: RootState) => state.theme);

  // Change Theme Mode
  const toggleThemeMode = useCallback(() => {
    dispatch(toggleMode());
  }, [dispatch]);

  return { themeMode, toggleThemeMode };
}
