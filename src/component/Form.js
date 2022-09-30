import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { getBooks, addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const addNewBook = async () => {
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };

    dispatch(addBook(book));
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

        <button onClick={addNewBook} type="button" className="input-submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
