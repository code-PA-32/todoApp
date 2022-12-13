import "./App.css";
import { Component } from "react";
import Header from "../header/header";
import CreateTask from "../create-task/create-task";
import TaskList from "../task-list/task-list";
import SortTasks from "../sort-tast/sort-task";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          text: "Start Project",
          completed: true,
          date: "Oct 01 2022",
          isImportant: false,
          dateTimeStamp: "1664575200000",
          id: 1,
        },
        {
          text: "Learn JavaScript",
          completed: false,
          date: "Nov 25 2022",
          isImportant: true,
          dateTimeStamp: "1669330800000",
          id: 2,
        },
        {
          text: "Learn HTML, CSS",
          completed: false,
          date: "Nov 25 2022",
          isImportant: true,
          dateTimeStamp: "1669330800000",
          id: 3,
        },
        {
          text: "Learn React",
          completed: false,
          date: "Dec 01 2022",
          isImportant: true,
          dateTimeStamp: "1669849200000",
          id: 4,
        },
      ],
      filter: "all",
    };
    this.maxId = 5;
    this.createDate();
  }

  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      const newArr = data.filter((item) => item.id !== id);

      return { data: newArr };
    });
  };

  onToggle = (id, prop) => {
    console.log(id);
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  createDate = () => {
    const monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const stamp = date.getTime();
    return {
      newDate: `${monthName[month]} ${day} ${year}`,
      timeStamp: `${stamp}`,
    };
  };

  onAddTask = (text) => {
    const { newDate, timeStamp } = this.createDate();
    const newItem = {
      text,
      completed: false,
      isImportant: false,
      id: this.maxId++,
      dateTimeStamp: timeStamp,
      date: newDate,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  filterTask = (items, filter) => {
      switch (filter) {
        case "comp":
          return items.filter((item) => item.completed);
  
        case "notcomp":
          return items.filter((item) => !item.completed);

          case "important":
            return items.filter((item) => item.isImportant);
  
        default:
          return items;
      }
  };

  render() {
    const { data, filter } = this.state;

    const task = data.length;
    const completed = data.filter((item) => item.completed).length;
    const important = data.filter((item) => item.isImportant).length;
    const notCompleted = task - completed;
    const visibleData = this.filterTask(data, filter)
    return (
      <div className="app">
        <Header task={task} completed={completed} notCompleted={notCompleted} />
        <CreateTask onAdd={this.onAddTask} />
        <SortTasks
          filter={filter}
          task={task}
          completed={completed}
          notCompleted={notCompleted}
          important={important}
          onFilterSelect={this.onFilterSelect}
        />
        <TaskList
          data={visibleData}
          onDeleteItem={this.onDeleteItem}
          onToggle={this.onToggle}
        />
      </div>
    );
  }
}

export default App;
