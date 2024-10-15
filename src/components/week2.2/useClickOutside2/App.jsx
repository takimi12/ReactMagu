import React, { useRef, useState } from 'react';
import useClickOutside from './useClickOutside';

export function DropdownRef() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Hook zamknie dropdown, gdy klikniemy poza jego obszar
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Zamknij" : "Otwórz"} Dropdown
      </button>

      {isOpen && (
        <div ref={dropdownRef} className="dropdown-menu">
          <p>Opcja 1</p>
          <p>Opcja 2</p>
          <p>Opcja 3</p>
        </div>
      )}
    </div>
  );
}
