import { faTwitter, faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="relative right-0 bottom-0 left-0  h-auto pt-2 bg-gray-600 flex justify-center">
      <FooterIcon icon={faYoutube} reference={'https://youtube.com/'} txt={'Youtube'} value="text-3xl hover:text-[#ff0000]" />
      <FooterIcon icon={faTwitter} reference={'https://twitter.com/'} txt={'Twitter'} value="text-3xl hover:text-[#38bdf8]" />
      <FooterIcon icon={faGithub} reference={'https://github.com/'} txt={'GitHub'} value="text-3xl hover:text-[#f3a601]" />
      <FooterIcon icon={faFacebook} reference={'https://facebook.com/'} txt={'Facebook'} value="text-3xl hover:text-[#0b65c3]" />
    </footer>
  );
}
function FooterIcon({ icon, reference, txt, value }) {
  return (
    <button>
      <div className={value}>
        <a className="w-max mr-20 flex-col-reverse" target="_blank" href={reference} rel="noreferrer">
          <FontAwesomeIcon icon={icon} />
          <p className="text-sm hover:text-gray-400">{txt}</p>
        </a>
      </div>
    </button>
  );
}

export default Footer;
