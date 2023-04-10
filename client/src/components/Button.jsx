import "./Button.css";

const Button = ({ type, label, onClick }) => {
  return (
    <div className="btn-main-cont">
      <button type={type} name={label} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
