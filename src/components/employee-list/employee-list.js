import "./employee-list.css";

import EmployeesListItem from "../employee-list-item/employee-list-item";

const EmployeeList = ({ data, onDelete, onToggleProp}) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        {...itemProps}
        key={id}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeeList;
