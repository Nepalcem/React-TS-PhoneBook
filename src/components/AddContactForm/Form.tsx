import { FC, useState, ChangeEvent, FormEvent } from "react";
import { FormStyled } from "./Form.styled";
import { FaPlus } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";
import { addContact } from "api-functions/api";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getIsAddContactPending } from "redux/selectors";
import { FormTextField } from "components/pages/registerPage/RegisterPage.styled";
import { toast } from "react-toastify";
import { ContactObject } from "components/App/App.types";

const Form: FC = () => {
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isAddContactLoading = useSelector(getIsAddContactPending);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value);
    } else {
      setNumber(e.currentTarget.value);
    }
  };

  const addContactItem = (name: string, number: string) => {
    const existingContact = contacts.find(
      (contact) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existingContact) {
      return null;
    }
    const userObj = {
      name,
      number,
    };
    return userObj;
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim().length === 0 || number.trim().length === 0) {
      toast.warning("Name or phone must not be empty!");
      return;
    }
    const newContact = addContactItem(name, number);
    if (newContact === null) {
      return alert(`${name} is already in contacts`);
    } else {
      (dispatch as any)(addContact(newContact as ContactObject));
      setName("");
      setNumber("");
    }
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <FormTextField
        type="text"
        name="name"
        inputProps={{ pattern: "^[A-Za-z\u0080-\uFFFF ' ]+$" }}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
        autoComplete="off"
        label="Name"
        variant="outlined"
      />
      <FormTextField
        type="tel"
        name="number"
        inputProps={{ pattern: "^(+?[0-9.()-s]*)$" }}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={number}
        autoComplete="off"
        label="Phone"
        variant="outlined"
      />

      <button type="submit" disabled={isAddContactLoading}>
        {isAddContactLoading ? (
          <LuLoader2 className="loading-icon"></LuLoader2>
        ) : (
          <FaPlus></FaPlus>
        )}{" "}
        Add Contact
      </button>
    </FormStyled>
  );
};

export default Form;
