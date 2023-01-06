import unauthorizedPhoto from '../assets/unauthorized-error.png';
import { Link } from 'react-router-dom';
function Unauthorized() {
  return (
    <div>
      <img className="mx-auto my-auto" src={unauthorizedPhoto} alt="named you shall not pass"></img>
      <h1 className="flex flex-col text:sm md:text-2xl justify-center items-center">
        you shall not pass!!
        <Link to="/login">
          <button className="md:mx-2 mt-4 md:p-2 bg-orange-600 rounded-lg">Log in</button>
        </Link>
      </h1>
    </div>
  );
}

export default Unauthorized;
