import React, { useState } from "react";

import { useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import AddStyled from "./styled/Add.styled";

export default function Add() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //const note = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(actionCreators, dispatch);
  return (
    <AddStyled>
      <h1>Add Note </h1>
      <form>
        <label>
          Enter Id:
          <input
            type="number"
            name="id"
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          Title Here:
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Content Here:
          <input
            type="text"
            name="content"
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </form>
      <button
        onClick={() => {
          ActionController.createNote({
            id: id,
            title: title,
            content: content,
          });
        }}
      >
        Submit
      </button>
    </AddStyled>
  );
}
