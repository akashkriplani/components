import useNavigation from '../hooks/use-navigation';
import classnames from 'classnames';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classnames('text-blue-500', className, currentPath === to && activeClassName);

  const handleClick = (event) => {
    // event.ctrlKey (windows) || event.metaKey (mac) returns true if the user does a control and click on the link to open a page in a new tab. In that case, we want the default browser navigation to occur using href attribute.
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    // If the navigation happens within the app, we use preventDefault() and use our custom navigation.
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}

export default Link;
