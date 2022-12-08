import { Grid, Container, Box, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function TodoForm({ todo, addTodo, handleTodoChange }) {
  return (
    <Box sx={{ my: 3 }}>
      <Container>
        <Grid container columnSpacing={2} rowSpacing={5}>
          <Grid item xs={12} md={10}>
            <TextField
              name="title"
              id="outlined-textarea"
              label="Todo Title"
              placeholder="What Do You Want ?"
              fullWidth
              onChange={handleTodoChange}
              value={todo.title ? todo.title : ""}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Button
              sx={{ width: "100%", height: "100%" }}
              onClick={addTodo}
              startIcon={<AddIcon />}
              variant="contained"
              color="success"
              disabled={
                !(
                  todo.title &&
                  todo.description &&
                  todo.start_time &&
                  todo.end_time
                )
              }
            >
              Add
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
              onChange={handleTodoChange}
              value={todo.description ? todo.description : ""}
              multiline
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="start_time"
              id="datetime-local"
              label="Start Time"
              type="datetime-local"
              onChange={handleTodoChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              value={todo.start_time ? todo.start_time : ""}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="end_time"
              id="datetime-local"
              label="End Time"
              type="datetime-local"
              onChange={handleTodoChange}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              value={todo.end_time ? todo.end_time : ""}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default TodoForm;
