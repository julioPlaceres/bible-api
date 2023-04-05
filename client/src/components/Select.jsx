import "./Select.css";

const Select = ({ id, label, name, values, onChange }) => {
  return (
    <div className="s-main-cont">
      <label className="s-label" htmlFor={id}>{label}</label>
      <select id={id} name={name} onChange={onChange}>
        <option value="">--Please choose an option</option>
        {values.map((value) => {
          return (
            <option key={value.toLowerCase()} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
