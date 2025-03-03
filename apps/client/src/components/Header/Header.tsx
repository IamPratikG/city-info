import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Your City Guide</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cities">City List</Link>
      </nav>
    </header>
  );
};

export default Header;
