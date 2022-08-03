import React, {createContext, useContext} from 'react';

import {AppContext} from './AppContext';

import {useFirstTemperature} from '../hooks/useFirstTemperature';
import {useSecondTemperature} from '../hooks/useSecondTemperature';
import {useFirstRelative} from '../hooks/useFirstRelative';
import {useSecondRelative} from '../hooks/useSecondRelative';
import {useWaterLevel} from '../hooks/useWaterLevel';
import {useGroundHumidity} from '../hooks/useGroundHumidity';
import {useAirQuality} from '../hooks/useAirQuality';

export const VariablesContext = createContext();

export const VariablesProvider = ({children}) => {
  const {userState} = useContext(AppContext);
  const {status} = userState;

  const [firstTemperature] = useFirstTemperature(status);
  const {secondTemperature} = useSecondTemperature(status);
  const {firstRelativeHumidity} = useFirstRelative(status);
  const {secondRelativeHumidity} = useSecondRelative(status);
  const {waterLevel} = useWaterLevel(status);
  const {groundHumidity} = useGroundHumidity(status);
  const {airQuality} = useAirQuality(status);

  return (
    <VariablesContext.Provider
      value={{
        firstTemperature,
        secondTemperature,
        firstRelativeHumidity,
        secondRelativeHumidity,
        waterLevel,
        groundHumidity,
        airQuality,
      }}>
      {children}
    </VariablesContext.Provider>
  );
};
