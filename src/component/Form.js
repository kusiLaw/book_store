import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');


  const fetchBooks = async () => {
    try {
      const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EF3HU7mC3UuQNf2vAE1O/books');
      const results = await response.json();
      dispatch(addNewBook(results));
    } catch (e) {
      console.log(e);
    }
  };



  //  useEffect(() =>{
  //   fetchBooks()
  // });

  const addBook = async () => {
  //  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EF3HU7mC3UuQNf2vAE1O/books',
  //  {
  //   item_id: uuidv4(),
  //    title,
    //    author,
  //   category: "Fiction"
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // dispatch(addNewBook(book));
  // dispatch()
    fetchBooks();

    setTitle('');
    setAuthor('');
  };



  return (
    <form className="form-container">
      <p>ADD NEW BOOK</p>
      <div className="form-wrap d-flex">
        <input
          className="input-title"
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={(e) => { setTitle(e.target.value); }}
        />
        <input
          className="input-Author"
          type="text"
          placeholder="Author"
          name="Author"
          value={author}
          onChange={(e) => { setAuthor(e.target.value); }}
        />

        <button onClick={addBook} type="button" className="input-submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
