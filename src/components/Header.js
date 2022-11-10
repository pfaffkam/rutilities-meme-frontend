import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faRandom, faSearch, faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <header className="flex items-center justify-end flex-nowrap bg-gray-800 p-2">
        <Link to={'home'}>
          <img className="absolute left-0 top-0 h-16 w-32" src={logo} alt="Logo" />
        </Link>
        {/*<Button text="Generator" reference="generate" icon={faPlusSquare} />
        <Button text="Szukaj" reference="search" icon={faSearch} />
        <Button text="Losowe" reference="random" icon={faRandom} />*/}
        <Button text="Sortowanie memów" reference="sort" icon={faSortAmountAsc} />
      </header>
      <Footer />
    </>
  );
}

function Button({ text, reference, icon }) {
  return (
    <button className="md:p-3 mr-10 active:bg-gray-500 focus:outline-none focus:[bg,text] focus:bg-gray-900 focus:text-amber-700 hover:bg-gray-900 text-amber-700 hover:text-amber-700 rounded-md">
      <Link to={reference}>
        <FontAwesomeIcon className="mr-5" icon={icon} />
        {text}
      </Link>
    </button>
  );
}

export default Header;
