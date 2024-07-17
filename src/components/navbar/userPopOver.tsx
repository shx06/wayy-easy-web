import { Popover } from "@mui/material";
import { signOut } from "next-auth/react";
import BtnOutlined from "../button/BtnOutlined";

type IProps = {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const UserPopOver = ({ id, open, anchorEl, onClose }: IProps) => {
  return (
    <Popover
      id={id}
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <BtnOutlined
        fullWidth
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </BtnOutlined>
    </Popover>
  );
};

export default UserPopOver;
