import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="flex items-center justify-end flex-nowrap bg-black p-2">
      {/* <Button text="Panel" reference={<About/>} /> */}
      <Link to={'home'}>
        <img
          className="
        absolute left-0 top-0 h-16 w-32"
          src={logo}
          alt="Logo"
        />
      </Link>
      <Button text="Generator" reference="generate" />
      <Button text="Szukaj" reference="search" />
      <Button text="Losowe" reference="random" />
      <Button text="Sortowanie memów" reference="sort" />
    </header>
  );
}

function Button({ text, reference }) {
  // some logic that will change the context panel.
  return (
    <div className="md:p-4 py-2 ml-10  text-white hover:text-amber-700">
      <Link to={reference}>{text}</Link>
    </div>
  );
}

export default Header;
