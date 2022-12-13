import "./sort-task.css";

const SortTasks = (props) => {
  const { important, completed, notCompleted, task, filter } = props;
  const buttonsData = [
    { name: "all", label: `All (${task})` },
    { name: "comp", label: `Completed (${completed})` },
    { name: "notcomp", label: `Not Completed (${notCompleted})` },
    { name: "important", label: `Important (${important})` },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "selected" : "";

    return (
      <button
        className={`filter-button ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="group-button">{buttons}</div>;
};

export default SortTasks;
