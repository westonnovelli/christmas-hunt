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
  path: '/firesidePath',
  component: Fireside,
});

const frankincense = layout.createRoute({
  path: '/frankincensePath',
  component: Frankincense,
});

const gameroom = layout.createRoute({
  path: '/gameroomPath',
  component: Gameroom,
});

const inn = layout.createRoute({
  path: '/innPath',
  component: Inn,
});

const northPole = layout.createRoute({
  path: '/northPolePath',
  component: NorthPole,
});

const sleigh = layout.createRoute({
  path: '/sleighPath',
  component: Sleigh,
});

const stables = layout.createRoute({
  path: '/stablesPath',
  component: Stables,
});

const treeFarm = layout.createRoute({
  path: '/treeFarmPath',
  component: TreeFarm,
});

const winterWonderland = layout.createRoute({
  path: '/winterWonderlandPath',
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
  ]),
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
