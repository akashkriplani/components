import { useState } from 'react';

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    // Close the dropdown
    setIsOpen(false);
    // Select the option
    onSelect(option);
  };

  let content = 'Select...';

  if (selection) {
    content = selection.label;
  }

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && renderedOptions}
    </div>
  );
}

export default Dropdown;
