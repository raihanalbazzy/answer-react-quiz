import { css } from 'react-emotion';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  '&:hover': {
    button: {
      display: 'inline',
    },
  },
  button: {
    display: 'none',
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  },
});

const Label = (props) => {
  return (
    <span className={cssLabel}>
      {props.value}
      <button onClick={props.onClick} type="button">
        ⊗
      </button>
    </span>
  );
};

export default Label;
