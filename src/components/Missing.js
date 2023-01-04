import caveman from '../assets/caveman-error.gif';
import { Link } from 'react-router-dom'; // jeśli używasz biblioteki react-router-dom

function Missing() {
  return (
    <div>
      <img className="mx-auto my-auto" src={caveman} alt="a caveman lost, chewing a cable"></img>
      <h1 className="flex text:sm md:text-2xl justify-center items-center">
        We've lost you, go back to the
        <br />
        <Link to="home">
          <button className="md:mx-2 md:p-2 bg-orange-600 rounded-lg">Main page</button> or
        </Link>
        <Link to="sort">
          <button className="md:mx-2 md:p-2 bg-orange-600 rounded-lg">browsing memes</button>
        </Link>
      </h1>
    </div>
  );
}

export default Missing;
