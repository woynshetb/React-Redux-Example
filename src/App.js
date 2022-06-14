import { useSelector, useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import List from "./components/List";
import Add from "./components/Add";

function App() {
  const note = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(actionCreators, dispatch);
  return (
    <div className="App">
      <List />
      <Add />
      <h1>No of Notes</h1>
      <h2>{note.todos.length}</h2>

      <ul>
        {note.todos.lengt === 0 ? (
          <h2>Nothing</h2>
        ) : (
          note.todos.map((note) => (
            <div>
              <h1>
                {note.id} {note.title}
              </h1>
              <p>{note.content}</p>
            </div>
          ))
        )}
      </ul>
      <button
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
      </button>
      <button onClick={() => ActionController.deleteNote(4)}>Delete</button>
    </div>
  );
}

export default App;
