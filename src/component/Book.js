import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const Remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="books-item d-flex">
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

      <div className="percentage-section d-flex">
        <div className="percentage-oval" />
        <div>
          <span className="percentage">0%</span>
          <span className="percentage-complete">completed</span>
        </div>
      </div>
      <div className="line2" />
      <div className="chapter-section d-flex">
        <div>
          <span className="Current-Chapter">CURRENT CHAPTER</span>
          <span className="Current-Lesson">chapter 0</span>
        </div>
        <button type="button" className="btn-update-progress">UPDATE PROGRESS</button>
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
