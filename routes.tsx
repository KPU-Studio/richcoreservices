import type { RouteRecord } from 'vite-react-ssg';
import Layout from './components/Layout';
import Home from './pages/Home';
import { SERVICES } from './constants';
import { POSTS } from './blog';

// Lazy page loader compatible with react-router's `lazy` (expects { Component }).
const page = (loader: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await loader()).default,
});

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'about',
        lazy: page(() => import('./pages/AboutPage')),
        entry: 'pages/AboutPage.tsx',
      },
      {
        path: 'contact',
        lazy: page(() => import('./pages/ContactPage')),
        entry: 'pages/ContactPage.tsx',
      },
      {
        path: 'services',
        lazy: page(() => import('./pages/ServicesIndex')),
        entry: 'pages/ServicesIndex.tsx',
      },
      {
        path: 'services/:slug',
        lazy: page(() => import('./pages/ServiceDetail')),
        entry: 'pages/ServiceDetail.tsx',
        getStaticPaths: () => SERVICES.map((s) => `services/${s.id}`),
      },
      {
        path: 'blog',
        lazy: page(() => import('./pages/BlogIndex')),
        entry: 'pages/BlogIndex.tsx',
      },
      {
        path: 'blog/:slug',
        lazy: page(() => import('./pages/BlogPost')),
        entry: 'pages/BlogPost.tsx',
        getStaticPaths: () => POSTS.map((p) => `blog/${p.slug}`),
      },
      {
        path: '*',
        lazy: page(() => import('./pages/NotFound')),
        entry: 'pages/NotFound.tsx',
      },
    ],
  },
];
