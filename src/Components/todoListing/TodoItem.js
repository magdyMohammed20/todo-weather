import { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { flexingCenter } from "../../style/style";
import Dialog from "../todoDialog/Dialog";
import CheckIcon from "@mui/icons-material/Check";
import ArchiveIcon from "@mui/icons-material/Archive";

function TodoItem({
  todo,
  deleteTodo,
  setIsEditOpen,
  setTodoEdit,
  handleChecked,
  handleArchive,
}) {
  const { id, title, description, start_time, checked } = todo;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ my: 5 }}>
      <Box sx={flexingCenter}>
        <Typography
          variant="h6"
          sx={{ textDecoration: checked && "line-through" }}
        >
          {title}
        </Typography>
        <Box>
          <Button
            color="error"
            variant="contained"
            onClick={() => deleteTodo(todo.id)}
            sx={{ py: 1.5 }}
          >
            <DeleteIcon />
          </Button>
          <Button
            color="info"
            variant="contained"
            sx={{ mx: 2, py: 1.5 }}
            onClick={() => {
              setTodoEdit(todo);
              setIsEditOpen(true);
            }}
          >
            <EditIcon />
          </Button>
          <Button
            color="warning"
            variant="contained"
            sx={{ py: 1.5, mr: 2 }}
            onClick={handleClickOpen}
          >
            <RemoveRedEyeIcon />
          </Button>
          <Button
            color="secondary"
            variant="contained"
            sx={{ py: 1.5, mr: 2 }}
            onClick={() => handleArchive(id)}
          >
            <ArchiveIcon />
          </Button>

          {checked == false && (
            <Button
              color="success"
              variant="contained"
              sx={{ py: 1.5 }}
              onClick={() => handleChecked(id)}
            >
              <CheckIcon />
            </Button>
          )}
        </Box>
      </Box>

      <Dialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        todo={todo}
      />
    </Container>
  );
}

export default TodoItem;
