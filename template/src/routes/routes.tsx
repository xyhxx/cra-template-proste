import { FC } from 'react';
import { Home } from '@pages';
import { useRoutes } from 'react-router';
import { HOME_PAGE } from './name';

const PrivateRoutes: FC = () => {
  const Routes = useRoutes([{ path: HOME_PAGE, element: <Home /> }]);

  return Routes;
};

export default PrivateRoutes;
