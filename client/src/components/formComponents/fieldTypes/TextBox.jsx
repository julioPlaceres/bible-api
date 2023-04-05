import "./TextBox.css";

export const TextBox = ({ labelText, name, placeholder, required, rows, cols }) => {
    return (
        <div className="tb-main-cont">
            <label className="tb-label">{labelText}</label>
            <textarea name={name}
                autoComplete="on"
                placeholder={placeholder}
                required={required}
                rows={rows}
                cols={cols}
                className="tb-textArea" />
        </div>
    );
}