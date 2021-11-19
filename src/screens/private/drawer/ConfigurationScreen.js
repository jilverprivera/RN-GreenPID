import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {AppContext} from '../../../context/appContext';

import Header from '../../../components/ui/header';
import {CardAutomatic} from '../../../components/configuration/cardAutomatic';
import {CardManual} from '../../../components/configuration/cardManual';

import {globals} from '../../../styles/globals';
import {configStyles} from '../../../styles/configuration.styles';
import {COLORS} from '../../../constants';

const ControlScreen = ({navigation}) => {
  const {
    configuration: {
      manualButton,
      setManualButton,
      automaticButton,
      setAutomaticButton,
    },
  } = useContext(AppContext);

  const handleActiveConfig = button => {
    if (button === 'automatic') {
      setManualButton(false);
      setAutomaticButton(!automaticButton);
    } else {
      setManualButton(!manualButton);
      setAutomaticButton(false);
    }
  };

  return (
    <SafeAreaView style={globals.container}>
      <Header {...navigation} title="Configuración" />
      <ScrollView style={{width: '100%'}}>
        <View
          style={{
            ...configStyles.cardContent,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={configStyles.selectableButton}
            onPress={() => handleActiveConfig('automatic')}>
            <Text style={configStyles.selectableButtonText}>
              Control automático
            </Text>
            <Ionicons
              name={automaticButton ? 'caret-up-outline' : 'caret-down-outline'}
              size={30}
              color={COLORS.white}
            />
          </TouchableOpacity>
          {automaticButton && <CardAutomatic />}
        </View>

        <View
          style={{
            ...configStyles.cardContent,
            marginTop: 10,
            marginBottom: manualButton ? 120 : 0,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={configStyles.selectableButton}
            onPress={() => handleActiveConfig()}>
            <Text style={configStyles.selectableButtonText}>
              Control manual
            </Text>
            <Ionicons
              name={manualButton ? 'caret-up-outline' : 'caret-down-outline'}
              size={30}
              color={COLORS.white}
            />
          </TouchableOpacity>
          {manualButton && <CardManual />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ControlScreen;
