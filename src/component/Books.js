import { useState } from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const [bookList] = useState({
    books: [
      {
        id: 1,
        title: 'Java',
      },
      {
        id: 2,
        title: 'React',
      },
      {
        id: 3,
        title: 'Django',
      },
    ],
  });

  return (
    <div className="bookContainer d-flex">
      <ul className="bookList d-flex">
        {bookList.books.map((item) => (
          <Book key={item.id} title={item.title} />
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default Books;
