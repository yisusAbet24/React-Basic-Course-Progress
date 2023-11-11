import PropTypes from "prop-types"; // ES6

export function Button({ text }) {
  return <button>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "click me",
};
