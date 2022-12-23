import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faRandom, faSearch, faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <nav className="hidden md:flex bg-gray-800  items-center justify-between mx-auto md:flex-row md:justify-start md:items-center">
        <div className="flex-1 flex items-center justify-between">
          <Link to="/home">
            <img className="h-16 w-32" src={logo} alt="logo meme website" />
          </Link>
        </div>
        <Link to="/sort" className={`text-gray-200 bg-gray-900 ${location.pathname === '/sort' ? 'active' : ''}`}>
          <Button text="Sortowanie memów" icon={faSortAmountAsc} />
        </Link>
      </nav>

      <div className="md:hidden fixed">
        <Hamburger toggled={isOpen} toggle={setOpen} color="orange" duration={0.6} label="Menu" />
        {isOpen && (
          <header className="flex items-center md:block  justify-end max-h-full flex-nowrap bg-gray-800 ">
            <div className="flex flex-col rounded-lg">
              <Link to="/sort" className={`text-gray-200 bg-gray-900 ${location.pathname === '/sort' ? 'active' : ''}`}>
                <Button text="Sortowanie memów" icon={faSortAmountAsc} />
              </Link>
              {/* <Button text="Generator" reference="generate" icon={faPlusSquare} />
              <Button text="Szukaj" reference="search" icon={faSearch} />
              <Button text="Losowe" reference="random" icon={faRandom} /> */}
            </div>
          </header>
        )}
      </div>
    </div>
  );
}

function Button({ text, reference, icon }) {
  return (
    <button className="p-4 hover:bg-gray-600  hover:text-gray-200 ">
      <FontAwesomeIcon className="mr-5" icon={icon} />
      {text}
    </button>
  );
}

export default Header;
