import PropTypes from "prop-types"; // ES6

export function Button({ text }) {
  return (
    <button
      onClick={function () {
        console.log("click");
      }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: "click me",
};
