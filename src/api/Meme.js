// import { useState, useEffect } from 'react';

// export const Meme = (props) => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.reykez.pl/api/memes/memes/random`, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/x-www-form-urlencoded'
//       }
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, [data.id]);

//   return <img className="rounded-t-lg md:h-108 md:w-96  md:rounded mr-20 border-4" alt="random mem" src={data.url} />;
// };
