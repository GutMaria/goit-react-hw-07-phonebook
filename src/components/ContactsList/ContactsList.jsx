import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contacts/contacts-operations'
import { getFilteredContacts, selectContacts } from '../../redux/contacts/contacts-selectors'
import {fetchContacts } from '../../redux/contacts/contacts-operations'

import css from './list.module.css'

const ContactsList = () => {

    const {isLoading, error} = useSelector(selectContacts);
    const items = useSelector(getFilteredContacts);

    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts())
    },[dispatch])

    const onDeleteContact = (id) => {
    dispatch(deleteContact(id))
    }
    
    // const FilterContacts = useSelector(getFilteredContacts)

    const elements = items.map(({id, name, phone }) => <li key={id}>{name}: {phone}.  <button onClick={()=> onDeleteContact(id)} type="button" className={css.deleteBtn}>Delete</button></li>)
    
    return (<>
        {isLoading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        {Boolean(items.length) && <ul className={css.list}>{elements}</ul>}
    </>

    )
}

export default ContactsList;