import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <div className="btn-main-cont">
      <button name={label} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
