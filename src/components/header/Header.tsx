import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/mainLogo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-center">
      <nav className="flex justify-between  py-6 w-[1140px] m-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="title">
            <img src={mainLogo} alt="" width={80} />
          </Link>
          <div className="menu hidden absolute top-7 right-2 flex-col justify-between w-7 h-5 m-5" onClick={handleToggleMenu}>
            <span className="h-0.5 w-full bg-black rounded"></span>
            <span className="h-0.5 w-full bg-black rounded"></span>
            <span className="h-0.5 w-full bg-black rounded"></span>
          </div>
        </div>
        <ul className={`sm:flex ${menuOpen ? "flex list-none" : "hidden"}`}>
          <li>
            <Link to="/" className="block no-underline p-2 mx-2 " onClick={handleToggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="block no-underline p-2 mx-2" onClick={handleToggleMenu}>
              Landings
            </Link>
          </li>
          <li>
            <Link to="/" className="block no-underline p-2 mx-2" onClick={handleToggleMenu}>
              Pages
            </Link>
          </li>
          <li>
            <Link to="/" className="block no-underline p-2 mx-2" onClick={handleToggleMenu}>
              Docs
            </Link>
          </li>
          <li>
            <Link to="/" className="block no-underline p-2 mx-2" onClick={handleToggleMenu}>
              Help
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="block no-underline rounded-md py-1 mt-1  text-blue-700 border-2 border-blue-700 px-5"
              onClick={handleToggleMenu}
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
