import { Link } from '@tanstack/react-router';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="mx-2">
      <div className="w-full h-16 aspect-video rounded-md border text-center grid place-items-center mb-4">
        <Link to="/map">Map</Link>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/firesidePath">Fireside</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/frankincensePath">Frankincense</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/gameroomPath">Gameroom</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/innPath">Inn</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/northPolePath">North Pole</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/sleighPath">Sleigh</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/stablesPath">Stables</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/treeFarmPath">Tree Farm</Link>
        </div>
        <div className="aspect-video rounded-md border text-center grid place-items-center">
          <Link to="/a/winterWonderlandPath">Winter Wonderland</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
