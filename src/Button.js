import classnames from 'classnames';

function Button({ children, primary, secondary, warning, success, danger, outline, rounded }) {
  const classes = classnames('flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-green-500 bg-green-500 text-white': success,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-yellow-400': outline && warning,
    'text-green-500': outline && success,
    'text-red-500': outline && danger
  });

  return <button className={classes}>{children}</button>;
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
