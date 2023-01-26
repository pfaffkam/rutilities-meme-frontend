import caveman from '../assets/caveman-error.gif';
import { Link } from 'react-router-dom';
import withLanguage from './HOC/withLanguage';

function Missing({ texts }) {
  return (
    <div>
      <img className="mx-auto my-auto" src={caveman} alt="a caveman lost, chewing a cable"></img>
      <h1 className="flex text:sm md:text-2xl justify-center items-center">
        {texts.missing}
        <br />
        <Link to="home">
          <button className="md:mx-2 md:p-2 bg-orange-600 rounded-lg"> {texts.mainPage}</button>
          {texts.or}
        </Link>
        <Link to="sort">
          <button className="md:mx-2 md:p-2 bg-orange-600 rounded-lg"> {texts.browse}</button>
        </Link>
      </h1>
    </div>
  );
}

export default withLanguage(Missing);
