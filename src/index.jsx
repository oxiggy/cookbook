import React from 'react'
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'
//styles
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import './index.css';
//Local files
import Layout from '@/components/layouts/Layout/Layout'
import Home from '@/components/pages/Home/Home'
import Recipes from '@/components/pages/Recipes/Recipes'
import Cooking from '@/components/pages/Cooking/Cooking'

const container = document.getElementById('root');
const root = createRoot(container);

const router = createHashRouter([
  {
    element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'recipes',
          element: <Recipes />,
        },
        {
          path: 'cooking',
          element: <Cooking />,
        }
      ]
  },
])

root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
    <RouterProvider router={router} />
  </MantineProvider>
);
