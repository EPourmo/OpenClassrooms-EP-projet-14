import { Link } from "react-router-dom";

const Header = ({ text, homepage }) => {
  return (
    <nav className="flex justify-between items-center">
      <Link to="/" className="font-lobster text-5xl text-primary">
        HRnet
      </Link>
      <Link
        to={homepage ? "/employees" : "/"}
        className="text-primary px-3 py-1.5 rounded-lg border-2 border-primary font-bold hover:scale-105 uppercase"
      >
        {text}
      </Link>
    </nav>
  );
};

export default Header;
