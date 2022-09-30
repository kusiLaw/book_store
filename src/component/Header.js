import {
  Link,
} from 'react-router-dom';
import svg from '../user.svg';

const Header = () => (
  <header className="header d-flex">
    <h1 className="bookstore-CMS">Bookstore CMS</h1>
    <nav>
      <ul className="nav-ul d-flex">
        <li><Link to="/" className="books">BOOKS</Link></li>
        <li><Link to="/categories" className="categories">CATEGORIES</Link></li>
      </ul>
    </nav>
    <div className="profile-oval d-flex">
      <img className="profile" src={svg} alt="Your SVG" />
    </div>
  </header>
);

export default Header;
