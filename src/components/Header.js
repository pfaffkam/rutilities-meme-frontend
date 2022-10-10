import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from './Footer';
import { sortIcon, randomIcon, searchIcon, generateIcon } from './Icons';

function Header() {
  return (
    <>
      <header className="flex items-center justify-end flex-nowrap bg-gray-800 p-2">
        {/* <Button text="Panel" reference={<About/>} /> */}
        <Link to={'home'}>
          <img
            className="
        absolute left-0 top-0 h-16 w-32"
            src={logo}
            alt="Logo"
          />
        </Link>
        <Button text="Generator" reference="generate" icon={generateIcon} />
        <Button text="Szukaj" reference="search" icon={searchIcon} />
        <Button text="Losowe" reference="random" icon={randomIcon} />
        <Button text="Sortowanie memów" reference="sort" icon={sortIcon} />
      </header>
      <Footer></Footer>
    </>
  );
}

function Button({ text, reference, icon }) {
  // some logic that will change the context panel.
  return (
    <button className="md:p-3  mr-10  active:bg-gray-500 focus:outline-none focus:[bg,text] focus:bg-gray-900 focus:text-amber-700 hover:bg-gray-900  text-amber hover:text-amber-700 rounded-md">
      <Link to={reference}>
        {icon}
        {text}
      </Link>
    </button>
  );
}

export default Header;
