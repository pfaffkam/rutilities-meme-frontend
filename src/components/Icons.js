import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faRandom, faSearch, faSortAmountAsc } from '@fortawesome/free-solid-svg-icons';

const generateIcon = <FontAwesomeIcon className="mr-3" icon={faPlusSquare} />;
const searchIcon = <FontAwesomeIcon className="mr-3" icon={faSearch} />;
const randomIcon = <FontAwesomeIcon className="mr-3" icon={faRandom} />;
const sortIcon = <FontAwesomeIcon className="mr-3" icon={faSortAmountAsc} />;

export { sortIcon, randomIcon, searchIcon, generateIcon };
