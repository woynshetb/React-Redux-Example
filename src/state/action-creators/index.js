export const createNote = (note) => {
  return (dispatch) => {
    dispatch({
      type: "AddNote",
      payload: note,
    });
  };
};
export const updateNote = (data) => {
  return (dispatch) => {
    dispatch({
      type: "UpdateNote",
      payload: data,
    });
  };
};
export const deleteNote = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch({
      type: "DeleteNote",
      payload: data,
    });
  };
};
