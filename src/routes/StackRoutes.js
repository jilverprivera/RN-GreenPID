import DrawerNavigator from '../navigation/Drawer';
import Error from '../screens/alerts/Error';
import Success from '../screens/alerts/Success';
import Warning from '../screens/alerts/Warning';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export const stackPrivateRoutes = [
  {route: 'Drawer', component: DrawerNavigator},
];
export const stackPublicRoutes = [
  {route: 'SignIn', component: SignIn},
  {route: 'SignUp', component: SignUp},
];

export const stackRoutes = [
  {route: 'Error', component: Error},
  {route: 'Success', component: Success},
  {route: 'Warning', component: Warning},
];
