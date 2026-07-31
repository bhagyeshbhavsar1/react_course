import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
};

export default Navbar;
