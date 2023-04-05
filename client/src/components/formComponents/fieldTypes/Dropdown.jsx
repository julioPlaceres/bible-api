import "./Dropdown.css";

export const Dropdown = ({ labelText, name, options }) => {

    if (!options.length) {
        return <option key="none" value="none">Loading...</option>
    }

    return (
        <div className="dd-main-cont">
            <label className="dd-label">{labelText}</label>
            <select name={name} className="dd-select">
                {options &&
                    options.map((item) => {
                        return <option key={item.value} value={item.value}>{item.label}</option>
                    })}
            </select>
        </div>
    );
}