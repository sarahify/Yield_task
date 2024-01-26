import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="Yield Logo" />
      </Link>
      <div className="flex items-center gap-[12px]">
        <Link to="/login">
          <button className="p-4">SIGN IN</button>
        </Link>
        <button className="p-4 bg-[#077DBB] text-white rounded-md">
          GET STARTED
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
