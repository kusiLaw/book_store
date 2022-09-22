import PropTypes from 'prop-types';

const Book = ({ title }) => <li className="books-item">{title}</li>;

Book.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Book;
