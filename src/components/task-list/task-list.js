import "./task-list.css";
import TaskListItem from "../task-list-item/task-list-item";

const TaskList = ({data, onDeleteItem, onToggle}) => {
  return (
    <div className="box">
      <ul className="list-task">
        {data.map(task =>    <TaskListItem 
          {...task} 
          key={task.id} 
          onDeleteItem={() => onDeleteItem(id)}
          onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
          />)}
      </ul>
    </div>
  );
};

export default TaskList;
