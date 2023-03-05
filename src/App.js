import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const state = useSelector((state) => state.value);
  const toggle = useSelector((state) => state.setTogele);
  const dispatch = useDispatch();
  const increase = () => {
    const action = { type: "increase", payload: 1 };
    dispatch(action);
  };
  const decrease = () => {
    const action = { type: "decrease", payload: 1 };
    dispatch(action);
  };
  const toggleFn = () => {
    dispatch({ type: "toggle" });
  };
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {toggle && (
        <>
          <div className="counter">Counter: {state}</div>
          <div>
            <button className="btn" onClick={increase}>
              increase +
            </button>
            <button className="btn" onClick={decrease}>
              decrease -
            </button>
          </div>
        </>
      )}
      <div>
        <button className="btn" onClick={toggleFn}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
