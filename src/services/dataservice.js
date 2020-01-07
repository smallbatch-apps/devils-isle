import {categories, critters, images } from './data.json';

export const getCategory = bySlug => {
  return categories.find(({slug}) => bySlug === slug);
}

export const allCategories = () => {
  return categories;
}

export const getCritter = bySlug => {
  return {
    ...critters.find(({slug}) => bySlug === slug),
    image: imageForCritter(bySlug)
  };
}

export const imageForCritter = bySlug => {
  return images.find(({critterSlug}) => bySlug === critterSlug);
}

export const getCrittersForCategory = forCategory => {
  return critters
    .filter(({category}) => forCategory === category)
    .map(critter => ({...critter, image: imageForCritter(critter.slug)}));
}

export const getWorstCritters = forCategory => {
  return critters
    .filter(({danger}) => danger === 10)
    .map(critter => ({...critter, image: imageForCritter(critter.slug)}));
}