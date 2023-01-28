import { Component } from "react";
import "./App.css";
import axios from "axios";
class LifeCycleDemo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    console.log("from constructor");
  }
  componentWillMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      this.setState({
        todos: [...this.state.todos, ...res.data],
      });
    });
  }

  showTodo() {
    return (
      <p>
        {this.state.todos.map((todo,key) => {
          return <li key={key} >{todo.title}</li>;
        })}
      </p>
    );
  }
  componentDidMount() {
    console.log("from did mount");
  }
  componentWillUnmount(){
    // unsubscribe 
    // removeListeners
  }
  render() {
    return (
      <>
        {this.state.todos.length > 0 ? this.showTodo() : <h1>Data loading</h1>}
      </>
    );
  }
}

export default LifeCycleDemo;
