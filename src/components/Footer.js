import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGithubSquare, faSquareFacebook, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';

const TwitterSquare = <FontAwesomeIcon icon={faTwitterSquare} />;
const GithubSquare = <FontAwesomeIcon icon={faGithubSquare} />;
const SquareFacebook = <FontAwesomeIcon icon={faSquareFacebook} />;
const SquareYoutube = <FontAwesomeIcon icon={faSquareYoutube} />;

function FooterIcon({ icon, reference, txt, value }) {
  return (
    <button>
      {
        <div className={value}>
          <a className="w-max mr-20 flex-col-reverse " target="_blank" href={reference}>
            {icon}
            <p className="text-sm hover:text-gray-400 ">{txt}</p>
          </a>
        </div>
      }
    </button>
  );
}

function Footer() {
  return (
    <footer className=" absolute right-0 bottom-0 left-0 h-auto pt-4 bg-gray-800  flex justify-center">
      <FooterIcon icon={SquareYoutube} reference={'https://youtube.com/'} txt={'Youtube'} value=" text-3xl hover:text-[#ff0000]" />
      <FooterIcon icon={TwitterSquare} reference={'https://twitter.com/'} txt={'Twitter'} value="text-3xl   hover:text-[#38bdf8]" />
      <FooterIcon icon={GithubSquare} reference={'https://github.com/'} txt={'GitHub'} value="text-3xl  hover:text-[#f3a601]" />
      <FooterIcon icon={SquareFacebook} reference={'https://facebook.com/'} txt={'Facebook'} value="text-3xl  hover:text-[#0b65c3]" />
    </footer>
  );
}

export default Footer;
