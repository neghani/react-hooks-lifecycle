import { useReducer, useEffect } from "react";
import axios from "axios";

function App() {
  //   const [counter, setcounter] = useState(0);
  //   const [displayTitle, setdisplayTitle] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };

      case "DECREMENT":
        return { counter: state.counter - 1, displayTitle: state.displayTitle };

      case "TOGGLE_TITLE":
        return { counter: state.counter, displayTitle: !state.displayTitle };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    displayTitle: false,
  });
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
    });

    return () => {
      // unsubscribe
      // removeListeners
    };
  }, []);

  return (
    <>
      <h1>Hello {state.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
          dispatch({ type: "TOGGLE_TITLE" });
        }}
      >
        DECREMENT
      </button>
      {state.displayTitle ? <span>Title</span> : null}
    </>
  );
}

export default App;
