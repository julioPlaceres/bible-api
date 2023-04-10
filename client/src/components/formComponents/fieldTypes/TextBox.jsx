import "./TextBox.css";

export const TextBox = ({
  labelText,
  name,
  value,
  placeholder,
  required,
  rows,
  cols,
  onChange,
}) => {
  return (
    <div className="tb-main-cont">
      <label htmlFor={name} className="tb-label">
        {labelText}
      </label>
      <textarea
        name={name}
        value={value}
        autoComplete="on"
        placeholder={placeholder}
        required={required}
        rows={rows}
        cols={cols}
        className="tb-textArea"
        onChange={onChange}
      />
    </div>
  );
};
