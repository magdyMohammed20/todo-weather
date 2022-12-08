import { Grid, Container, Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";

function TodoEditForm({
  addTodo,
  handleTodoChangeInEdit,
  todoEdit,
  setIsEditOpen,
  todos,
  setTodos,
}) {
  const handleEditSave = () => {
    const map = todos.map((tod) => {
      if (tod.id == todoEdit.id) {
        return todoEdit;
      }
    });

    setTodos(map);
    setIsEditOpen(false);
  };
  return (
    <Box sx={{ my: 3 }}>
      <Container>
        <Grid container columnSpacing={2} rowSpacing={5}>
          <Grid item xs={9}>
            <TextField
              name="title"
              id="outlined-textarea"
              label="Todo Title"
              placeholder="What Do You Want ?"
              fullWidth
              onChange={handleTodoChangeInEdit}
              value={todoEdit.title ? todoEdit.title : ""}
            />
          </Grid>

          <Grid item xs={3} sx={{ alignSelf: "center" }}>
            <Button
              onClick={() => handleEditSave()}
              variant="contained"
              color="success"
              sx={{ mr: 2, py: 1.5 }}
              //disabled={!(todo.title && todo.description)}
            >
              <SaveIcon />
            </Button>
            <Button
              onClick={() => setIsEditOpen(false)}
              variant="contained"
              color="error"
              sx={{ py: 1.5 }}
            >
              <ClearIcon />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="description"
              id="outlined-textarea"
              label="Todo Description"
              placeholder="Type Todo Description"
              fullWidth
              rows={10}
              onChange={handleTodoChangeInEdit}
              value={todoEdit.description ? todoEdit.description : ""}
              multiline
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="start_time"
              id="datetime-local"
              label="Start Time"
              type="datetime-local"
              onChange={handleTodoChangeInEdit}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              value={todoEdit.start_time ? todoEdit.start_time : ""}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="end_time"
              id="datetime-local"
              label="End Time"
              type="datetime-local"
              onChange={handleTodoChangeInEdit}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              value={todoEdit.end_time ? todoEdit.end_time : ""}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TodoEditForm;
