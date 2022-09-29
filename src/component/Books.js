import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((state) => state.books);

  // console.log(Object.keys(book), "book call")

  return (
    <div className="bookContainer d-flex">
      <ul className="bookList d-flex">
        {Object.keys(book).map((item) => (
          <Book key={item} id={item} title={book[`${item}`][0].title} author={book[`${item}`][0].author} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
