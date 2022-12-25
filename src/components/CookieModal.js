import { useEffect, useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';

const CookieModal = () => {
  const [cookies, setCookie] = useCookies(['cookie_name']);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [hasCookie, setHasCookie] = useState(false);

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 365);

  useEffect(() => {
    const cookieValue = cookies['cookie_name'];
    if (cookieValue) {
      setIsModalOpen(false);
    }
  }, []);

  const handleAcceptClick = () => {
    setCookie('cookie_name', 'Accept', { expires: expirationDate });
    setIsModalOpen(false);
    setHasCookie(true);
  };

  const handleDeclineClick = () => {
    setCookie('cookie_name', 'Decline', { expires: expirationDate });
    setIsModalOpen(false);
    setHasCookie(true);
  };

  return (
    <CookiesProvider>
      {isModalOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg shadow-xl py-4 px-6 max-w-md text-center">
            <p className="text-xl  text-white font-bold mb-4">Cookie Information about Meme website</p>
            <p className="mb-4 text-white ">Our website uses cookies to improve our services. By using our site, you consent to the use of cookies by us.</p>
            <div className="flex justify-between">
              <button onClick={handleAcceptClick} className="text-green-600 p-2 bg-black rounded-lg">
                Accept
              </button>
              <button onClick={handleDeclineClick} className="text-red-600  p-2 bg-black rounded-lg ">
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </CookiesProvider>
  );
};

export default CookieModal;
