import React from 'react';
import Button from './UI/Button';

const Categories = ({ categories, filterItem }) => {
  const button = categories.map((category) => {
    return (
      <Button
        key={category}
        css="filter-btn"
        onClick={() => filterItem(category)}
      >
        {category}
      </Button>
    );
  });
  return (
    <div className="btn-container">
      {button}
      {/* <Button css="filter-btn" onClick={() => filterItem('shakes')}>
        shakes
      </Button>
      <Button css="filter-btn" onClick={() => filterItem('all')}>
        all
      </Button> */}
    </div>
  );
};

export default Categories;
