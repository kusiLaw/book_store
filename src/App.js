import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './component/Header';
import './App.css';
import Books from './component/Books';
import Categories from './component/categories';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>

  );
}

export default App;
