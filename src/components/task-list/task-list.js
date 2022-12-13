import "./task-list.css";
import TaskListItem from "../task-list-item/task-list-item";

const TaskList = ({data, onDeleteItem, onToggle}) => {
  const elements = data.map(item => {
    const {id, ...rest} = item;
    return (
      <TaskListItem 
      {...rest} 
      key={id} 
      onDeleteItem={() => onDeleteItem(id)}
      onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    )
  })

  return (
    <div className="box">
      <ul className="list-task">
        {elements}
      </ul>
    </div>
  );
};

export default TaskList;
