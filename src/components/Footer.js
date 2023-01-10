import { faTwitter, faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="relative right-0 bottom-0 left-0 w-auto pt-2 bg-gray-600 flex justify-center">
      <FooterIcon icon={faYoutube} reference={'https://youtube.com/'} txt={'Youtube'} value="[#ff0000]" />
      <FooterIcon icon={faTwitter} reference={'https://twitter.com/'} txt={'Twitter'} value="[#38bdf8]" />
      <FooterIcon icon={faGithub} reference={'https://github.com/'} txt={'GitHub'} value="[#f0f6fc]" />
      <FooterIcon icon={faFacebook} reference={'https://facebook.com/'} txt={'Facebook'} value="[#0b65c3]" />
    </footer>
  );
}

function FooterIcon({ icon, reference, txt, value }) {
  return (
    <button>
      <div className={`text-3xl leading-3 hover:text-${value}`}>
        <a className="w-auto mr-20 flex-col-reverse" target="_blank" href={reference} rel="noreferrer">
          <FontAwesomeIcon icon={icon} />
          <p className="text-sm">{txt}</p>
        </a>
      </div>
    </button>
  );
}

export default Footer;
