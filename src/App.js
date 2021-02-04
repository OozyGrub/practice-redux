import "./App.css";
import User from "./User";
import { connect } from "react-redux";

const App = ({ user, setName }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Krit Kruaykitanon</h1>
        <User username={user.name} />
        <button onClick={() => setName("Redux Tutorial")}>Change Name</button>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    employee: state.employee
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "setName",
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
