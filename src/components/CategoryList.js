import React from 'react';
import {allCategories} from '../services/dataservice';

const CategoryList = () => {

  return <ul className="list-reset my-5 -mx-5 absolute hidden pb-5 bg-orange-dark  category-list">
    {allCategories().map(category => {
      return <li key={category.slug}>
        <a href={`/critters/${category.slug}`} className="inline-block text-orange-lighter hover:text-white no-underline w-full px-5 pt-3">{category.name}</a>
      </li>
    })}
  </ul>
};
export default CategoryList;