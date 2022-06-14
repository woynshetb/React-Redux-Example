const initalData = {
  todos: [],
};

const reducer = (state = initalData, action) => {
  switch (action.type) {
    case "AddNote":
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case "UpdateNote":
      return {
        ...state,
        todos: state.todos.map((note, index) =>
          index === action.payload.index
            ? {
                ...note,
                id: action.payload.data.id,
                title: action.payload.data.title,
                content: action.payload.data.content,
              }
            : note
        ),
      };
    case "DeleteNote":
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
