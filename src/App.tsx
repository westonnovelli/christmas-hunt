import {
  createReactRouter,
  createRouteConfig,
  Link,
  Outlet,
  RouterProvider,
  useMatch,
} from '@tanstack/react-router';
import React from 'react';
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

export const rootRoute = createRouteConfig({
  component: () => {
    return (
      <Layout>
        <Link to="/">Home</Link>
        <div className="mx-2">
          <Outlet />
        </div>
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

const fireside = rootRoute.createRoute({
  path: '/firesidePath',
  component: Fireside,
});

const frankincense = rootRoute.createRoute({
  path: '/frankincensePath',
  component: Frankincense,
});

const gameroom = rootRoute.createRoute({
  path: '/gameroomPath',
  component: Gameroom,
});

const inn = rootRoute.createRoute({
  path: '/innPath',
  component: Inn,
});

const northPole = rootRoute.createRoute({
  path: '/northPolePath',
  component: NorthPole,
});

const sleigh = rootRoute.createRoute({
  path: '/sleighPath',
  component: Sleigh,
});

const stables = rootRoute.createRoute({
  path: '/stablesPath',
  component: Stables,
});

const treeFarm = rootRoute.createRoute({
  path: '/treeFarmPath',
  component: TreeFarm,
});

const winterWonderland = rootRoute.createRoute({
  path: '/winterWonderlandPath',
  component: WinterWonderland,
});

const routeConfig = rootRoute.addChildren([
  index,
  map,
  fireside,
  frankincense,
  gameroom,
  inn,
  northPole,
  sleigh,
  stables,
  treeFarm,
  winterWonderland,
]);
const router = createReactRouter({ routeConfig });

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  }
}

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
