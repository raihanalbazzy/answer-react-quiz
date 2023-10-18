import { useMemo } from 'react';
import { cssSpace, cssSun, cssPlanet } from './style';

function generateRandomColor(seed) {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + seed)) + min;

  var h = randomInt(0, 360);
  var s = randomInt(42, 98);
  var l = randomInt(40, 90);
  return `hsl(${h},${s}%,${l}%)`;
}

const Planet = (props) => {
  const { number } = props;

  const color = useMemo(() => generateRandomColor(number), [number]);
  return <div className={cssPlanet({ number, color })} />;
};

const Solar = (props) => {
  const { numbersofPlanet = 0 } = props;
  return (
    <div className={cssSpace}>
      <div className={cssSun}>
        {[...Array(numbersofPlanet).keys()].map((_, key) => (
          <Planet key={key} number={key + 1} />
        ))}
      </div>
    </div>
  );
};

export default Solar;
