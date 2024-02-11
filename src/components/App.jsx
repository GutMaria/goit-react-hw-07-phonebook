import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList'
import Filter from "./Filter/Filter";
import { fetchContacts } from '../redux/contacts/contacts-operations'
import { selectContacts } from '../redux/contacts/contacts-selectors'

const App = () => {

  const {items, isLoading, error} = useSelector(selectContacts);

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchContacts())
      },[dispatch])

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactsForm />
        {/* якщо є список контактів рендеримо розмітку, якщо пусто - то ні */}
        {isLoading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {Boolean(items.length) && <>
          <h2>Contacts</h2>
          <Filter/>
          <ContactsList />
        </>
        }
      </div>
    );
  }

export default App;

