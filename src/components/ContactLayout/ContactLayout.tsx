import Form from "components/AddContactForm/Form";
import Filter from "components/Filter/Filter";
import ContactsList from "components/contactsList/ContactsList";
import { ContentBlock } from "./ContactLayout.styled";

function ContactLayout() {
  return (
    <div>
      <ContentBlock>
        <h1>Add a new contact</h1>
        <Form></Form>
      </ContentBlock>
      <ContentBlock>
        <Filter />
      </ContentBlock>
      <ContactsList />
    </div>
  );
}

export default ContactLayout;