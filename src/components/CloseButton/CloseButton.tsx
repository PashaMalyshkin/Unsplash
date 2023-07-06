import React from 'react';

export const CloseButton = () => {
  return (
    <a
      href="/"
      className="modal__close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 -960 960 960"
        width="32"
        fill="white"
      >
        <path
          d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
        />
      </svg>
    </a>
  );
};
