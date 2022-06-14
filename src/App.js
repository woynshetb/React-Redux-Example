import { useSelector, useDispatch } from "react-redux/es/exports";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import List from "./components/List";
import Add from "./components/Add";
import StyledApp from "./App.styled";

function App() {
  const note = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const ActionController = bindActionCreators(actionCreators, dispatch);
  return (
    <StyledApp>
      <div>
        <List />
        <Add />
      </div>
    </StyledApp>
  );
}

export default App;
