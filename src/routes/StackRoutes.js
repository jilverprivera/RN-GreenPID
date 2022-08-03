import Tabs from '../navigation/Tabs';
import Error from '../screens/alerts/Error';
import Success from '../screens/alerts/Success';
import Warning from '../screens/alerts/Warning';
import AutomaticConfiguration from '../screens/control/AutomaticConfiguration';
import ManualConfiguration from '../screens/control/ManualConfiguration';
import Initial from '../screens/Initial';
import AirQualityManual from '../screens/manuals/AirQualityManual';
import IrrigationManual from '../screens/manuals/IrrigationManual';
import TemperatureManual from '../screens/manuals/TemperatureManual';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import AirQuality from '../screens/variables/AirQuality';
import GroundHumidity from '../screens/variables/GroundHumidity';
import RelativeHumidity from '../screens/variables/RelativeHumidity';
import Temperature from '../screens/variables/Temperature';
import WaterLevel from '../screens/variables/WaterLevel';

export const stackPublicRoutes = [
  // Auth ✅
  {route: 'SignIn', component: SignIn},
  {route: 'SignUp', component: SignUp},
];

export const stackPrivateRoutes = [
  // Tabs ✅
  {route: 'Tabs', component: Tabs},

  // Variables
  {route: 'TemperatureDetail', component: Temperature},
  {route: 'RelativeDetail', component: RelativeHumidity},
  {route: 'GroundDetail', component: GroundHumidity},
  {route: 'AirQualityDetail', component: AirQuality},
  {route: 'WaterLevelDetail', component: WaterLevel},

  // Manuals ✅
  {route: 'TemperatureManual', component: TemperatureManual},
  {route: 'AirQualityManual', component: AirQualityManual},
  {route: 'IrrigationManual', component: IrrigationManual},

  // Configuration
  {route: 'ManualConfiguration', component: ManualConfiguration}, //✅
  {route: 'AutomaticConfiguration', component: AutomaticConfiguration}, //✅
];

export const stackRoutes = [
  // Warning || Success || Error || Initial ✅
  {route: 'Initial', component: Initial},
  {route: 'Error', component: Error},
  {route: 'Success', component: Success},
  {route: 'Warning', component: Warning},
];
