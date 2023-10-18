import { useState } from 'react';
import Solar from './Solar';
const ENTER_KEY = 'Enter';

const Test9 = () => {
  const [numbersofPlanet, setNumbersofPlanet] = useState();
  const onKeyUp = (e) => {
    if (e.key === ENTER_KEY) {
      setNumbersofPlanet(parseInt(e.target.value) || 0);
    }
  };
  return (
    <>
      <ul>
        <li>Make a solar system</li>
        <li>Number of planets must revolves around the sun</li>
        <li>The color of each planet must be unique</li>
        <li>More far the planet = more time it's revolves</li>
      </ul>
      <input type="text" placeholder="number of planet" onKeyUp={onKeyUp} />

      <Solar numbersofPlanet={numbersofPlanet} />
    </>
  );
};

export default Test9;
