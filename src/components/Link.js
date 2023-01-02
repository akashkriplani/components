import { useContext } from 'react';
import NavigationContext from '../context/navigation';
import classnames from 'classnames';

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const classes = classnames('text-blue-500');

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
