import "./app-info.css";

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Employee in Company</h1>
      <h2>Total number of Employees: {employees}</h2>
      <h2>Premium will get: {increased}</h2>
    </div>
  );
};

export default AppInfo;
