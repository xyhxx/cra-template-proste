import { FC } from 'react';
import { App } from '@/pages';
import { useRoutes } from 'react-router';
import { APP_PAGE } from './name';

const PrivateRoutes: FC = () => {
  const Routes = useRoutes([
    { path: APP_PAGE, element: <App /> },
  ]);

  return Routes;
};

export default PrivateRoutes;