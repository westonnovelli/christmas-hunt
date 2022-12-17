import {
  createReactRouter,
  createRouteConfig,
  Link,
  Outlet,
  RouterProvider,
  useMatch,
} from '@tanstack/react-router';
import React from 'react';
import { z } from 'zod';

import Fireside from './activities/Fireside';
import Frankincense from './activities/Frankincense';
import Gameroom from './activities/Gameroom';
import Inn from './activities/Inn';
import NorthPole from './activities/NorthPole';
import Sleigh from './activities/Sleigh';
import Stables from './activities/Stables';
import TreeFarm from './activities/TreeFarm';
import WinterWonderland from './activities/WinterWonderland';
import Home from './Home';
import Layout from './layout/Layout';
import Map from './Map';

export const rootRoute = createRouteConfig();

const layout = rootRoute.createRoute({
  id: 'a',
  path: '/a',
  validateSearch: z.object({
    c: z.string().optional(),
  }),
  component: () => {
    const match = useMatch('/a', { strict: false });
    const mode = match?.routeSearch?.c;
    return (
      <Layout>
        {mode !== 'live' && <Link to="/">Home</Link>}
        <Outlet />
      </Layout>
    );
  },
});

export const index = rootRoute.createRoute({
  path: '/',
  component: Home,
});

const map = rootRoute.createRoute({
  path: '/map',
  component: Map,
});

const fireside = layout.createRoute({
  path: '/Yp7H',
  component: Fireside,
});

const frankincense = layout.createRoute({
  path: '/8e2I',
  component: Frankincense,
});

const gameroom = layout.createRoute({
  path: '/bOrV',
  component: Gameroom,
});

const inn = layout.createRoute({
  path: '/BALc',
  component: Inn,
});

const northPole = layout.createRoute({
  path: '/f9kN',
  component: NorthPole,
});

const sleigh = layout.createRoute({
  path: '/0TIx',
  component: Sleigh,
});

const stables = layout.createRoute({
  path: '/1ms8',
  component: Stables,
});

const treeFarm = layout.createRoute({
  path: '/_9iw',
  component: TreeFarm,
});

const winterWonderland = layout.createRoute({
  path: '/gQnv',
  component: WinterWonderland,
});

const routeConfig = rootRoute.addChildren([
  index,
  map,
  layout.addChildren([
    fireside,
    frankincense,
    gameroom,
    inn,
    northPole,
    sleigh,
    stables,
    treeFarm,
    winterWonderland,
  ])
]);
const router = createReactRouter({ routeConfig });

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
