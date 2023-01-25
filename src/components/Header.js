import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState, useContext } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faRandom, faSearch, faSortAmountAsc, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from './context/LanguageProvider';
import withLanguage from './HOC/withLanguage';
import { faPlusSquare, faRandom, faSearch, faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';
import QRCodeGenerator from './QRCodeGenerator';
import { BiQrScan } from 'react-icons/bi';

function Header(props) {
  const [isOpen, setOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div>
      <nav className="hidden md:flex bg-gray-800 items-center justify-between mx-auto md:flex-row md:justify-start md:items-center">
        <div className="flex-1 flex items-center justify-between">
          <Link to="/home">
            <img className="h-16 w-32" src={logo} alt="logo meme website" />
          </Link>
          <button className="ml-24 hidden md:flex" onClick={() => setShowQRCode(!showQRCode)}>
            {<BiQrScan />}
            {showQRCode && <QRCodeGenerator />}
          </button>
        </div>
        <NavItem to="/sort" text={props.texts.sortMemes} icon={faSortAmountAsc} />
        <button className="mr-4 mt-2 text-orange-500 flex flex-col" onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}>
          {<FontAwesomeIcon size="lg" icon={faGlobe} />}
          {language.toUpperCase()}
        </button>
      </nav>

      <div className="md:hidden fixed">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#f97316" duration={0.6} label="Menu" />
        {isOpen && (
          <>
            <header className="flex items-center md:block rounded-lg justify-end max-h-full flex-nowrap bg-gray-800 ">
              <div className="flex flex-col">
                <NavItem to="/sort" text={props.texts.sortMemes} icon={faSortAmountAsc} />
              </div>
            </header>
            <button className=" absolute top-3 left-14 text-orange-500" onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}>
              {<FontAwesomeIcon size="lg" icon={faGlobe} />}
            </button>
          </>
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

export default withLanguage(Header);
