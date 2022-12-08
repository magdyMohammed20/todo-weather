import { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { textCenter } from "../../style/style";
import TodoForm from "../form/TodoForm";
import TodoListing from "../todoListing/TodoListing";
import TodoEditForm from "../form/EditForm";
import Archive from "../archive/Archive";
function TodoView() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({});
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [todoEdit, setTodoEdit] = useState({});

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        checked: false,
        archive: false,
        ...todo,
      },
    ]);
    setTodo({});
  };

  const handleTodoChangeInEdit = (e) => {
    setTodoEdit({
      ...todoEdit,
      [e.target.name]:
        e.target.name !== "start_time" || e.target.name !== "end_time"
          ? e.target.value
          : new Date(e.target.value).toLocaleString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
    });
  };

  const handleTodoChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]:
        e.target.name !== "start_time" || e.target.name !== "end_time"
          ? e.target.value
          : new Date(e.target.value).toLocaleString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
    });
  };

  const deleteTodo = (id) => {
    const todoDeleteFilter = todos.filter((tod) => tod.id !== id);
    setTodos(todoDeleteFilter);
  };

  const getTodoForEdit = (tod) => {
    setTodoEdit(tod);
  };

  const handleChecked = (todId) => {
    const newMap = todos.map((tod) => {
      if (tod?.id == todId) {
        return { ...tod, checked: true };
      }
      return tod;
    });
    setTodos(newMap);
  };

  const handleArchive = (todId) => {
    const newMap = todos.map((tod) => {
      if (tod?.id == todId) {
        return { ...tod, archive: true };
      }
      return tod;
    });
    setTodos(newMap);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Container>
        <Typography variant="h6" fontWeight="bold" sx={textCenter}>
          Todo App List
        </Typography>
        {isEditOpen ? (
          <TodoEditForm
            todoEdit={todoEdit}
            setIsEditOpen={setIsEditOpen}
            handleTodoChangeInEdit={handleTodoChangeInEdit}
            setTodos={setTodos}
            todos={todos}
          />
        ) : (
          <>
            <TodoForm
              addTodo={addTodo}
              handleTodoChange={handleTodoChange}
              todo={todo}
            />
            <TodoListing
              todos={todos}
              setTodos={setTodos}
              deleteTodo={deleteTodo}
              setIsEditOpen={setIsEditOpen}
              setTodoEdit={setTodoEdit}
              handleChecked={handleChecked}
              handleArchive={handleArchive}
            />
          </>
        )}

        {todos.some((tod) => tod.archive == true) && <Archive todos={todos} />}
      </Container>
    </Box>
  );
}

export default TodoView;
