import "./create-task.css";
import { Component } from "react";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length < 3) return;
    this.props.onAdd(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    const { text } = this.state;
    return (
      <form className="create-task-box">
        <input
          value={text}
          type="text"
          name="text"
          placeholder="Type your task here"
          onChange={this.onValueChange}
        />

        <button type="submit" onClick={this.onSubmit}>
          Add task
        </button>
      </form>
    );
  }
}

export default CreateTask;
