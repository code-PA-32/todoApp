import "./employee-list-item.css";

const EmployeesListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, increase, like } = props;
  let classList = "list-group-item d-flex justify-content-between";

  if (like) {
    classList += " like";
  }
  if (increase) {
    classList += " increase";
  }

  return (
    <li className={classList}>
      <span className="list-group-item-label" onClick={onToggleProp} data-toggle='like'>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          data-toggle='increase'
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
