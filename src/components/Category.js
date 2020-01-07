import React from 'react';
import { getCategory, getCrittersForCategory } from '../services/dataservice';

const rmj = require('render-markdown-js');

const Category = props => {
  const cat = getCategory(props.match.params.category)
  const critters = getCrittersForCategory(props.match.params.category);

  return <div className="w-full">
    <h2 className="text-xl uppercase mb-5 text-green-lightest feature">{cat.name}</h2>

    <p className="description text-green-lightest mb-5" dangerouslySetInnerHTML={{__html:rmj(cat.description)}}></p>

    <h2 className="text-xl uppercase mb-5 feature">Creatures</h2>

    <div className="md:flex flex-wrap">
      {critters.filter(({image, description}) => image && description).map(critter => {
        return <div className="md:w-1/4 p-5 mb-5" key={critter.slug}>
          <a className="category-critter w-full bg-cover inline-block justify-between bg-no-repeat bg-top"
            href={`/critters/${cat.slug}/${critter.slug}`}
            style={{backgroundImage: `url(${critter.image.imageUrl})`}}
          >
            <span className="p-5 bg-orange text-orange-lightest w-full inline-block feature text-xl">
              {critter.name}
            </span>
          </a>
        </div>
      })}


    </div>

  </div>;
}

export default Category;