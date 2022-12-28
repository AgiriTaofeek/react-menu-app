import React from 'react';

const Button = ({ css, onClick, children }) => {
  return (
    <button className={css} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
