import { useState } from 'react';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && renderedOptions}
    </div>
  );
}

export default Dropdown;
