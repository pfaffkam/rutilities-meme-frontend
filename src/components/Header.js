import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState, useContext } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faRandom, faSearch, faSortAmountAsc, faGlobe, faUser } from '@fortawesome/free-solid-svg-icons';
import { LanguageContext } from '../context/LanguageProvider';
import { withLanguage } from '../components/HOC/withLanguage';
import { QRCodeGenerator } from './QRCodeGenerator';
import { BiQr } from 'react-icons/bi';
import { useAuth } from '../hooks/useAuth';
import { useEffect } from 'react';

function Header({ texts }) {
  const [isOpen, setOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    if (!auth.email) {
      setShowLogin(true);
    } else setShowLogin(false);
  }, [auth]);

  return (
    <div>
      <nav className="hidden md:flex bg-gray-800 items-center justify-between mx-auto md:flex-row md:justify-start md:items-center">
        <div className="flex-1 flex items-center">
          <Link to="/home">
            <img className="h-16 w-24" src={logo} alt="logo meme website" />
          </Link>
          <button className="ml-24 hidden md:flex" onClick={() => setShowQRCode(!showQRCode)}>
            {<BiQr className="text-orange-600 text-2xl" />}
            {showQRCode && <QRCodeGenerator />}
          </button>
        </div>
        <NavItem to="/home" text={texts.browse} icon={faRandom} />
        <NavItem to="/sort" text={texts.sortMemes} icon={faSortAmountAsc} />
        {showLogin && <NavItem to="/login" text={texts.logIn} icon={faUser} />}
        <button className="mt-2 mr-6 text-orange-500 flex flex-col" onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}>
          {<FontAwesomeIcon size="lg" icon={faGlobe} />}
          {language.toUpperCase()}
        </button>
      </nav>
      <div className="md:hidden fixed bg-black rounded-lg">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#f97316" duration={0.6} label="Menu" />
        {isOpen && (
          <>
            <header className="flex items-center md:block rounded-lg justify-end max-h-full flex-nowrap bg-gray-800 ">
              <div className="flex flex-col">
                <NavItem to="/sort" text={texts.sortMemes} icon={faSortAmountAsc} />
                <NavItem to="/home" text={texts.browse} icon={faRandom} />
              </div>
            </header>
            <button className=" absolute top-3 left-14 text-orange-500" onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}>
              {<FontAwesomeIcon size="lg" icon={faGlobe} />}
            </button>
            {showLogin && (
              <Link to="/login" className="absolute top-3 left-24 text-orange-500" icon={faUser}>
                <FontAwesomeIcon size="lg" icon={faUser} />
              </Link>
            )}
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
