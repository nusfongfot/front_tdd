import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  openImage: boolean;
  handleCloseImage: () => void;
  selectedImage: string | null;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ImageDialog({
  openImage,
  handleCloseImage,
  selectedImage,
}: Props) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleCloseImage}
        aria-labelledby='customized-dialog-title'
        open={openImage}
      >
        <IconButton
          aria-label='close'
          onClick={handleCloseImage}
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            color: "white",
            background: "black",
          }}
        >
          <CloseIcon
            sx={{
              background: "black",
              borderRadius: "50%",
              width: 25,
              height: 25,
            }}
          />
        </IconButton>
        <DialogContent dividers>
          <img
            src={selectedImage ?? undefined}
            className='h-[400px] w-[500px]'
          />
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
