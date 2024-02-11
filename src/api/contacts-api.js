import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65c8ddc8a4fbc162e1124f5a.mockapi.io/contacts',
});

export const requestContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await instance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
