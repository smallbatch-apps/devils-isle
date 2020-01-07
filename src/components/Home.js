import React from 'react';
import {Link} from 'react-router-dom';

import {getWorstCritters} from '../services/dataservice';

const Home = props => {
  return <div className="flex">

    <div className="w-4/5 m-5">
      <h2 className="mb-5 feature text-green-lightest">Good News and Bad News</h2>

      <p className="mb-5 leading-loose">Non-Australians often have an impression of Australia as a land filled with terrifying nightmares made real - snakes, spiders, scorpions and centipedes, venom and poison and teeth and claws.</p>

      <p className="mb-5 leading-loose">The fact is, Australia has very few deaths from any of the above. No one has died from a spider bite since 1981 when Funnel Web Spider anti-venom was developed. There are no scorpions that are dangerous. Centipedes are much the same.</p>

      <p className="mb-5 leading-loose">Then there's the other important fact: of the people bitten, stung, scratched or kicked by Australia's wildlife, the vast majority were trying to catch something, or kill something. Most being about three quarters. No specific statistics are available on how many were immediately preceeded with "Mate, hold me beer!" but it would be a safe bet to think more than a few.</p>

      <p className="mb-5 leading-loose">Australia has a lot of nasty looking animals, especially in the spiders, that are actually completely harmless. Most particularly,
        the gigantic but otherwise harmless <Link to="/critters/spider/golden-orb-weaver" className="text-green-lighter font-semibold no-underline hover:underline">Golden Orb Weaver</Link> and <Link to="/critters/spider/huntsman-spider" className="text-green-lighter font-semibold no-underline hover:underline">Huntsman</Link> spiders.
        That said, the animals to the right? They will straight up kill you.</p>
    </div>
    <div className="w-1/5 mt-5">
      <h2 className="mb-5 feature text-green-lightest">The Very Worst</h2>

      <p className="mb-5 text-sm">The following are some of the most dangerous animals in Australia.</p>

      {getWorstCritters().map((critter, index) => <div key={critter.slug}>
        <h3 className="feature mb-3">
          <Link to={`/critters/${critter.category}/${critter.slug}`} className="text-green-lighter font-semibold no-underline hover:underline">
            {critter.name}
            {false && <img src={critter.image.imageUrl} alt={critter.name}/>}
          </Link>
        </h3>
      </div>)}

      <p className="mb-5 text-xs text-green">Note: The "most dangerous" above is a complex question. The list is of things that are highly venomous, but some (such as the Inland Taipan) are very rare, or not aggressive.</p>
    </div>
  </div>
}

export default Home;