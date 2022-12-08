import * as React from "react";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  IconButton,
  Typography,
  Box,
  Button,
  Dialog,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  handleClickOpen,
  handleClose,
  todo,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "720px!important",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} component="div">
          <Typography variant="h5">{todo.title}</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box sx={{ display: "flex", mb: 3 }}>
            <Box sx={{ mr: 3 }}>
              <Typography
                variant="caption"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CalendarMonthIcon sx={{ mr: 1 }} />
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "#b9b9b9" }}
                >
                  {new Date(todo.start_time).toLocaleString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="caption"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <CalendarMonthIcon sx={{ mr: 1 }} />
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "#b9b9b9" }}
                >
                  {new Date(todo.end_time).toLocaleString("en-us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </Typography>
              </Typography>
            </Box>
          </Box>
          <DialogContentText>{todo.description}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
