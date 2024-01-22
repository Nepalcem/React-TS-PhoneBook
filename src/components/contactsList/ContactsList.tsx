import React from "react";
import { useDispatch } from "react-redux";
import { ContactListWrapper, ContactsStyled } from "./ContactsList.styled";
import { StyledTrashIcon } from "./TrashIcon.styled";
import * as selectors from "../../redux/selectors";
import { useSelector } from "react-redux";
import { deleteContact } from "api-functions/api";
import EditModal from "components/EditModal/EditModal";
import CallIcon from "./CallIcon";
import { Loader } from "./ContactsPreloader/ContactsPreloader";
import { AppDispatch } from "redux/store";

const ContactsList = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectors.getIsLoading);
  const errorMessage = useSelector(selectors.getError);
  const contacts = useSelector(selectors.getVisibleContacts);

  const haveContacts = !!contacts.length;

  const handleDelete = (id:number, name:string) => {
    const isConfirmed = window.confirm(
      `Do you want to delete ${name} from your contacts?`
    );

    if (isConfirmed) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <ContactListWrapper haveContacts={haveContacts}>
      {isLoading && !errorMessage && <Loader />}
      <ContactsStyled>
        {contacts.map(({ name, id, number }) => (
          <li key={id} className="item">
            <div className="contact__data">
              <span className="name">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
              <span className="phone">{number} </span>
            </div>
            <CallIcon href={number} />
            <EditModal id={id} name={name} number={number} />
            <StyledTrashIcon
              onClick={() => {
                if (id !== undefined) {
                  handleDelete(id, name);
                }
              }}
            ></StyledTrashIcon>
          </li>
        ))}
      </ContactsStyled>
    </ContactListWrapper>
  );
};

export default ContactsList;