import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Your City Guide</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cities">City List</Link>
      </nav>
    </header>
  );
};

export default Header;
