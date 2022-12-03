import './UpButton.css';

const UpButton = (props) => {
  const classes = 'up-button ' + props.className;

  return (
    <button className={classes} onClick={props.onClick}>
      Up!
    </button>
  );
};

export default UpButton;
