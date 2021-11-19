import React, {useContext, useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {AuthContext} from '../../context/authContext';
import {globals} from '../../styles/globals';
import {profileStyles} from '../../styles/profile.styles';

const ConfigurationScreen = () => {
  const transition = useRef(new Animated.Value(0)).current;

  const {SignOut, userState} = useContext(AuthContext);

  useEffect(() => {
    Animated.timing(transition, {
      toValue: 1,
      delay: 500,
      useNativeDriver: true,
    }).start();
    <Text>ConfigurationScreen</Text>;
  }, []);
  return (
    <Animated.View style={{...globals.container, opacity: transition}}>
      <View style={profileStyles.userInformation}>
        <Text style={profileStyles.title}>Tu nombre</Text>
        <Text style={profileStyles.description}>{userState.userName}</Text>

        <Text style={profileStyles.title}>Tu UID</Text>
        <Text style={profileStyles.description}>{userState.userId}</Text>
      </View>
      <View style={profileStyles.informationWrapper}>
        <View style={profileStyles.titleWrapper}>
          <Text style={profileStyles.lastValueTitle}>Tus ultimos valores</Text>
        </View>
        <View>
          <View style={profileStyles.lastInfoWrapper}>
            <Text style={profileStyles.description}>Temperatura</Text>
            <Text style={profileStyles.description}>35 °C</Text>
          </View>
          <View style={profileStyles.lastInfoWrapper}>
            <Text style={profileStyles.description}>Humedad relativa</Text>
            <Text style={profileStyles.description}>56 %</Text>
          </View>
          <View style={profileStyles.lastInfoWrapper}>
            <Text style={profileStyles.description}>Luminosidad</Text>
            <Text style={profileStyles.description}>40 %</Text>
          </View>
          <View style={profileStyles.lastInfoWrapper}>
            <Text style={profileStyles.description}>Dióxido de carbono</Text>
            <Text style={profileStyles.description}>25 %</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={profileStyles.logOutButton} onPress={SignOut}>
        <Text style={profileStyles.logOutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ConfigurationScreen;
