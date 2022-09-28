import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((state) => state.books);

  return (
    <div className="bookContainer d-flex">
      <ul className="bookList d-flex">
        {book.map((item) => (
          <Book key={item.id} id={item.id} title={item.title} author={item.author} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
