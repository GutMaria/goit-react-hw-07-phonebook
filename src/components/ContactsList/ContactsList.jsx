import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/contacts-operations'
import { selectVisibleContacts } from '../../redux/contacts/contacts-selectors'

import css from './list.module.css'

const ContactsList = () => {

    const items = useSelector(selectVisibleContacts);

    const dispatch = useDispatch();

    const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
    }
    
    const elements = items.map(({id, name, phone }) => <li key={id}>{name}: {phone}.  <button onClick={()=> onDeleteContact(id)} type="button" className={css.deleteBtn}>Delete</button></li>)
    
    return (<>
        {Boolean(items.length) && <ul className={css.list}>{elements}</ul>}
    </>
    )
}

export default ContactsList;