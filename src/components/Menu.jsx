import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  const item = items.map((menuItem) => {
    return <MenuItem key={menuItem.id} {...menuItem} />;
  });
  return <div className="section-center">{item}</div>;
};

export default Menu;
