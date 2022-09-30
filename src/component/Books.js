import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((state) => state.books);

  const checkState = () => {
    if (book) {
      const a = (Object.keys(book).map((item) => (
        <Book key={item} id={item} title={book[item][0].title} author={book[item][0].author} />
      ))
      );
      return a;
    }
    return <></>;
  };

  return (
    <div className="bookContainer d-flex">
      <ul className="bookList d-flex">
        {
         checkState()
     }

      </ul>
      <Form />
    </div>
  );
};

export default Books;
