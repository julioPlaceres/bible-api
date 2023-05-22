import { NameField, AuthorField } from "../formFields/FormFields";
import Button from "../../Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { setName, setAuthor } from "../../../redux/forms/book";
import { ADD_BOOK } from "../../../utils/mutation";

export const Book = () => {
  const { name, author } = useSelector((state) => state.book);
  const [addBook] = useMutation(ADD_BOOK);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();

    switch (e.target.name) {
      case "name":
        dispatch(setName(e.target.value));
        break;

      case "author":
        dispatch(setAuthor(e.target.value));
        break;

      default:
        break;
    }

    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name);
    console.log(author);

    try {
      const { data } = await addBook({
        variables: { name: name, author: author },
      });
      console.log(data);
    } catch (ex) {
      console.error(ex);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cw-form-body">
        <div className="f-main-cont">
          <NameField placeholder="ie: Genesis" onChange={handleOnChange} />
          <AuthorField onChange={handleOnChange} />
        </div>
      </div>
      <FormBtns />
    </form>
  );
};

const FormBtns = () => {
  return (
    <div className="cw-btns-cont cw-row">
      <Button type="reset" label="Reset" />
      <Button type="submit" label="submit" />
    </div>
  );
};
