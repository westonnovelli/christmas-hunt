import { Link } from '@tanstack/react-router';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="pt-2 px-2 bg-emerald-800 h-screen w-screen">
      <Link
        to="/map"
        className="w-full h-16 aspect-video rounded-md border text-center grid place-items-center mb-4 text-slate-100"
      >
        Map
      </Link>
      <div className="grid grid-cols-3 gap-8">
        <Link
          to="/a/Yp7H"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Fireside
        </Link>
        <Link
          to="/a/8e2I"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Frankincense
        </Link>
        <Link
          to="/a/bOrV"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Gameroom
        </Link>
        <Link
          to="/a/BALc"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Inn
        </Link>
        <Link
          to="/a/f9kN"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          North Pole
        </Link>
        <Link
          to="/a/0TIx"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Sleigh
        </Link>
        <Link
          to="/a/1ms8"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Stables
        </Link>
        <Link
          to="/a/_9iw"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Tree Farm
        </Link>
        <Link
          to="/a/gQnv"
          className="aspect-video rounded-md border text-center grid place-items-center text-slate-100"
        >
          Winter Wonderland
        </Link>
      </div>
    </div>
  );
};

export default Home;
