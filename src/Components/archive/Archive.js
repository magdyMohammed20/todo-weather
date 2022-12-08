import { Container, Box, Typography, Button, Alert } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { flexingCenter } from "../../style/style";
import TodoItem from "../todoListing/TodoItem";

function Archive({
  todos,
  deleteTodo,
  setIsEditOpen,
  setTodoEdit,
  setTodos,
  handleChecked,
  handleArchive,
}) {
  console.log(todos);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5">Archive</Typography>
      {todos.length > 0 ? (
        todos?.map(
          (todo) =>
            todo.archive == true && (
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
        <Alert severity="info" variant="filled" sx={{ mt: 3 }}>
          No Todos In Archive
        </Alert>
      )}
    </Container>
  );
}

export default Archive;
