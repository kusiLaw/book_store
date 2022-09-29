import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

 

  const deleteBook = async()=>{
   const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EF3HU7mC3UuQNf2vAE1O/books/${id}`,
   {
    method: 'DELETE'
  });
  
  }


  const Remove = () => {
   deleteBook()
   dispatch(removeBook(id));
 };

  return (
    <li className="books-item">
      <div className="book-section">
        <p className="book">
          <span className="book-type">Engineering</span>
          <span className="book-title">{title}</span>
          <span className="book-author">{author}</span>
        </p>
        <div className="book-bottoms">
          <button type="button" className="book-bottom">Comments</button>
          <button onClick={Remove} type="button" className="book-bottom">Remove</button>
          <button type="button" className="book-bottom">Edit</button>
        </div>
      </div>
    </li>

  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
