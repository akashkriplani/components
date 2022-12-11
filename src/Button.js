import PropTypes from 'prop-types';

function Button({ children, primary, secondary, warning, success, danger, outline, rounded }) {
  return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, warning, success, danger }) => {
    // No props should occur at the same time on any Button component.
    // If it does, count should be more than 1 and should throw the error.
    const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger);
    if (count > 1) {
      return new Error(' Only one of primary, secondary, warning, success, danger can be true');
    }
  }
};

export default Button;
