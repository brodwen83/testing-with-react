import React from "react";
import PropTypes from "prop-types";

const SharedButton = ({ buttonText, emitEvent }) => {
  const handleEvent = () => {
    if (emitEvent) emitEvent();
  };

  return (
    <button
      type="button"
      data-test="sharedButtonComponent"
      onClick={handleEvent}
    >
      {buttonText}
    </button>
  );
};

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
