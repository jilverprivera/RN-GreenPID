import Information from '../screens/Information';
import Home from '../screens/Home';
import Manuals from '../screens/Manuals';
import Variables from '../screens/Variables';

export const tabRoutes = [
  {route: 'Home', label: 'Inicio', icon: 'home', component: Home}, //❓
  {route: 'Manuals', label: 'Manuales', icon: 'book', component: Manuals}, // ✅
  {
    route: 'Variables',
    label: 'Variables',
    icon: 'sliders-h',
    component: Variables,
  }, //❓
  {
    route: 'Settings',
    label: 'Configuración',
    icon: 'user-cog',
    component: Information, // ✅
  },
];
