import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AuthContext} from '../../context';

import {Header} from '../../components/core';
import ConfigButton from '../../components/settings/configButton';

import {COLORS} from '../../constants';
import {GLOBAL_STYLES, SETTINGS} from '../../styles';

const list = [
  {
    title: 'Opciones de descarga',
    color: COLORS.darkGray,
    icon: 'download',
    route: 'downloadScreen',
  },
  {
    title: 'Acerca de la aplicación',
    color: COLORS.secondary,
    icon: 'info-circle',
    route: 'informationScreen',
  },
];

const SettingScreen = () => {
  const {userState, SignOut} = useContext(AuthContext);
  const {userId, userName} = userState;
  return (
    <View style={GLOBAL_STYLES.screenContainer}>
      <Header title="Configuración" />
      <View style={GLOBAL_STYLES.screenWrapper}>
        <View style={SETTINGS.userInformationWrapper}>
          <Text style={SETTINGS.userName}>{userName}</Text>
          <View style={SETTINGS.idWrapper}>
            <Text style={SETTINGS.id}>ID: </Text>
            <Text style={SETTINGS.id}>{userId}</Text>
          </View>
        </View>

        <View style={SETTINGS.optionsWrapper}>
          <Text style={SETTINGS.title}>Opciones generales</Text>

          {list.map((_, index) => (
            <ConfigButton
              key={index}
              title={_.title}
              color={_.color}
              iconName={_.icon}
              route={_.route}
            />
          ))}
        </View>

        <TouchableOpacity onPress={() => SignOut()} style={SETTINGS.logOutBtn}>
          <Icon size={24} color={COLORS.auxiliar_4} name="sign-out-alt" />
          <Text style={SETTINGS.logOutBtnText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
