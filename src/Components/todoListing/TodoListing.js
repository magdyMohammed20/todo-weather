import { Container, Box, Typography, Button, Alert } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { flexingCenter } from "../../style/style";
import TodoItem from "./TodoItem";

function TodoListing({
  todos,
  deleteTodo,
  setIsEditOpen,
  setTodoEdit,
  setTodos,
  handleChecked,
  handleArchive,
}) {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5">Todo List</Typography>
      {todos.length > 0 ? (
        todos?.map(
          (todo) =>
            todo.archive == false && (
              <TodoItem
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                deleteTodo={deleteTodo}
                key={todo?.id}
                setIsEditOpen={setIsEditOpen}
                setTodoEdit={setTodoEdit}
                handleChecked={handleChecked}
                handleArchive={handleArchive}
              />
            )
        )
      ) : (
        <Alert severity="warning" variant="filled">
          No Todos Founded
        </Alert>
      )}
    </Container>
  );
}

export default TodoListing;
