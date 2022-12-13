import "./task-list-item.css";

const TaskListItem = ({
  text,
  date,
  completed,
  isImportant,
  onDeleteItem,
  onToggle,
}) => {
  let clazz = "";
  if (isImportant) {
    clazz += " isImportant";
  }
  if (completed) {
    clazz += " task-completed";
  }
  return (
    <li className="task-item">
      <div className={`inner-task-item${clazz}`}>
        <span>{text}</span>
        <span className={`date${clazz}`}>{date}</span>
        <button
          type="button"
          data-toggle="completed"
          className={`completed-task${clazz}`}
          onClick={onToggle}
        ></button>
        <button
          type="button"
          data-toggle="isImportant"
          className={`selected-task${clazz}`}
          onClick={onToggle}
        ></button>
        <button
          type="button"
          className="delete-task"
          onClick={onDeleteItem}
        ></button>
      </div>
    </li>
  );
};

export default TaskListItem;
