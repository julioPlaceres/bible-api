export const TextBox = ({ labelText, name, placeholder, required, rows, cols }) => {
    return (
        <label>
            {labelText}
            <textarea name={name}
                autoComplete="on"
                placeholder={placeholder}
                required={required}
                rows={rows}
                cols={cols} />
        </label>
    );
}