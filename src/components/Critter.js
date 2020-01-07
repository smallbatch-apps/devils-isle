import React from 'react';

import {getCritter} from '../services/dataservice';
const rmj = require('render-markdown-js');

const Critter = props => {

  const critter = getCritter(props.match.params.critter);

  return <div className="w-full flex">
    <div className="flex-1">
      <h2 className="text-2xl uppercase mb-5 text-green-lightest feature">{critter.name}</h2>

      <p className="description text-green-lightest mb-5" dangerouslySetInnerHTML={{__html:rmj(critter.description)}}></p>
    </div>
    <div className="w-1/4 ml-5">

      <img src={critter.image.imageUrl} alt={critter.name} className="w-full mb-5 border border-green" />

      <span className="uppercase text-sm feature">Aka</span>
      <div className="mb-5 mt-1 text-green-lightest">{critter.aka}</div>

      <span className="uppercase text-sm feature">Species</span>
      <div className="mb-5 mt-1 text-green-lightest"><em>{critter.species}</em></div>

      <span className="uppercase text-sm feature">Category</span>
      <div className="mb-5 mt-1"><a href={`/critters/${critter.category}`} className="capitalize no-underline text-green-lighter font-semibold hover:text-white hover:underline">{critter.category}</a></div>

      <span className="uppercase text-sm feature">Appearance</span>
      <div className="stat-bar flex flex-row mb-5 mt-1">{ createGraph(critter.appearance) }</div>

      <span className="uppercase text-sm feature">Danger</span>
      <div className="stat-bar flex flex-row mb-5 mt-1">{ createGraph(critter.danger) }</div>

      <span className="uppercase text-sm feature">Risk</span>
      <div className="stat-bar flex flex-row mb-5 mt-1">{ createGraph(critter.risk) }</div>

    </div>

  </div>
}

const createGraph = number => {
  const array = [];
  for(let i = 0; i < +number; i++) {
    array.push(<div key={i}></div>);
  }
  return array;
}

export default Critter;