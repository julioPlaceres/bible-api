import "./Upload.css";

export const ImageUpload = ({ value, onChange }) => {
  return (
    <div className="iu-main-cont">
      <label htmlFor="imageUpload" className="iu-label">
        Images{" "}
      </label>
      <input
        type="file"
        className="iu-textArea"
        id="imageUpload"
        name="imageUpload"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
