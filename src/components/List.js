import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import ListStyled from "./styled/List.styled";
export default function List() {
  const note = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(actionCreators, dispatch);
  return (
    <ListStyled>
      <h1>List of Notes</h1>
      {note.todos.map((note) => (
        <div className="lists">
          <h6>{note.id}</h6>
          <h6>{note.title}</h6>
          <h6>{note.content}</h6>

          <button
            className="delete"
            onClick={() => ActionController.deleteNote(note.id)}
          >
            Delete
          </button>
          {/* <button
            onClick={() =>
              ActionController.updateNote({
                index: 0,
                data: {
                  id: 5,
                  title: "Woynshet",
                  content: "A nice programmer",
                },
              })
            }
          >
            Update
          </button> */}
        </div>
      ))}
    </ListStyled>
  );
}
