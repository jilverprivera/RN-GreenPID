import React from 'react';
import {ScrollView} from 'react-native';

import {useVariablesProcess} from '../hooks/useVariablesProcess';

import ProcessVariablesCard from './ProcessVariablesCard';

const ProcessVariables = () => {
  const {variables} = useVariablesProcess();

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <ProcessVariablesCard
        title="Setpoint temperatura"
        variable={variables.temperature_sp}
        units="°C"
      />
      <ProcessVariablesCard
        title="Constante proporcional (KP)"
        variable={variables.kp}
      />
      <ProcessVariablesCard
        title="Constante integral (KI)"
        variable={variables.ki}
      />
      <ProcessVariablesCard
        title="Constante derivativa (KD)"
        variable={variables.kd}
      />

      <ProcessVariablesCard
        title="Activación bomba agua (Hum. suelo)"
        variable={variables.ground_humidity_sp}
        units="%"
      />
      <ProcessVariablesCard
        title="Desactivación bomba agua (Nivel agua)"
        variable={variables.irrigation_sp}
        units="%"
      />
    </ScrollView>
  );
};

export default ProcessVariables;
