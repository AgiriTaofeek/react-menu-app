import { useState } from 'react';
import Data from './Data';
import Categories from './components/Categories';
import Menu from './components/Menu';
import Wrapper from './components/UI/Wrapper';

//* Dynamic and better way to filter an array of object based on any key properties on the objects
const allCategories = Data.map((item) => item.category); //* returns an array of the categories but there are repeating categories.
const uniqueAllCategories = new Set(allCategories); //* returns an object with the unique categories no repeating categories
const allCategoriesInArray = ['all', ...uniqueAllCategories]; //* all unique categories in an array

function App() {
  const [menuItems, setMenuItems] = useState(Data);
  const [categories, setCategories] = useState(allCategoriesInArray);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItems(Data);
      return;
    }
    const newItem = Data.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItem);
  };
  return (
    <main>
      <Wrapper>
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItems} />
      </Wrapper>
    </main>
  );
}

export default App;
