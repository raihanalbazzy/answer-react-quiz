import { css, keyframes } from 'react-emotion';

const gravity = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  position: 'relative',
  overflow: 'hidden',
});

export const cssSun = css({
  width: 50,
  height: 50,
  backgroundColor: 'yellow',
  borderRadius: 40,
});

export const cssPlanet = ({ number, color }) =>
  css({
    position: 'absolute',
    width: number * 100 - 10,
    height: number * 100 - 10,
    borderRadius: 999,
    border: '1px solid #fff',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) rotate(0deg)',
    animation: `${gravity}  ${1500 * number}ms linear infinite`,
    '&:before': {
      position: 'inherit',
      content: '""',
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '100%',
      backgroundColor: color,
      marginTop: number <= 1 ? 1 * 10 : 4 * (number - 1) * 10,
    },
  });
