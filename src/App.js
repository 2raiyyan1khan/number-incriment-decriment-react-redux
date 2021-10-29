import React from "react";
import { connect } from "react-redux";
import { incrimentCounter, decrimentCounter } from "./redux/ActionCreators";
const App = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "300px",
        }}
      >
        <button
          style={{
            padding: "10px 30px",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={() => props.decriment()}
        >
          -
        </button>
        <h1>{props.counter}</h1>
        <button
          style={{
            padding: "10px 30px",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={() => props.incriment()}
        >
          +
        </button>
      </div>
    </div>
  );
};
const mapStateToprops = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => ({
  incriment: () => dispatch(incrimentCounter()),
  decriment: () => dispatch(decrimentCounter()),
});
export default connect(mapStateToprops, mapDispatchToProps)(App);
