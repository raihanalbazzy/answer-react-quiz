import { css } from 'react-emotion';

export const cssForm = css({
  marginTop: 24,
  'input, textarea, button': {
    display: 'block',
    marginBottom: 8,
  },
});

export const cssModal = css({
  position: 'fixed',
  zIndex: 1,
  paddingTop: '100px',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.4)',
});

export const modalContent = css({
  backgroundColor: '#FFFF',
  margin: 'auto',
  padding: '20px',
  width: '80%',
});
