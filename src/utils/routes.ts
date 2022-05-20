import { lazy } from 'solid-js';

export default [
    {
      path: '/',
      component: lazy(() => import('../pages/Home'))
    },
    {
      path: '/about',
      component: lazy(() => import('../pages/About'))
    },
    {
      path: "*all",
      component: lazy(() => import('../pages/Fallback'))
    }
];