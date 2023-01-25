import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faRandom, faSearch, faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <nav className="hidden md:flex bg-gray-800 items-center justify-between mx-auto md:flex-row md:justify-start md:items-center">
        <div className="flex-1 flex items-center justify-between">
          <Link to="/home">
            <img className="h-16 w-32" src={logo} alt="logo meme website" />
          </Link>
        </div>
        <NavItem to="/sort" text="Sort memes" icon={faSortAmountAsc} />
        <NavItem to="/home" text="Browsing memes" icon={faRandom} />
      </nav>

      <div className="md:hidden fixed">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#f97316" duration={0.6} label="Menu" />
        {isOpen && (
          <header className="flex items-center md:block rounded-lg justify-end max-h-full flex-nowrap bg-gray-800 ">
            <div className="flex flex-col">
              <NavItem to="/sort" text="Sort memes" icon={faSortAmountAsc} />
              <NavItem to="/home" text="Browsing memes" icon={faRandom} />
            </div>
          </header>
        )}
      </div>
    </div>
  );
}

function NavItem({ to, text, icon }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link to={to} className={`p-2 rounded-lg md:mr-5 text-white ${active ? 'bg-orange-500 text-black' : ''}`}>
      <FontAwesomeIcon className="mr-5" icon={icon} />
      {text}
    </Link>
  );
}

export default Header;
