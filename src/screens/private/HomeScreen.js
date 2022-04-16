import React, {useContext} from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';

import VariablesList from '../../components/VariablesList';
import BottomSheet from '../../components/home/bottomSheet';

import SPRING_CONFIG from '../../config/spring_config.json';
import SENSOR_LIST from '../../config/sensor_list.json';

import {COLORS, SIZES} from '../../constants';
import {HOME_STYLES, GLOBAL_STYLES} from '../../styles';
import {useTemperature} from '../../hooks';
import {AuthContext} from '../../context';
import {Chart} from '../../components/core';

const HomeScreen = ({navigation, animated}) => {
  const {userState} = useContext(AuthContext);
  const {name} = userState;

  const {chartData, fullData} = useTemperature();

  const top = useSharedValue(SIZES.height);

  const style = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart(_, context) {
      context.startTop = top.value;
    },
    onActive(event, context) {
      top.value = context.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > SIZES.height / 2 + 200) {
        top.value = SIZES.height;
      } else {
        top.value = SIZES.height / 1;
      }
    },
  });
  return (
    <>
      <StatusBar
        hidden={false}
        animated={true}
        backgroundColor={COLORS.background}
        barStyle={'dark-content'}
      />
      <Animated.View style={{...GLOBAL_STYLES.screenContainer, ...animated}}>
        <View style={HOME_STYLES.header}>
          {name ? (
            <Text style={HOME_STYLES.userName}>¡Hola, {name}!</Text>
          ) : (
            <ActivityIndicator />
          )}

          <TouchableOpacity
            style={HOME_STYLES.button}
            activeOpacity={0.7}
            onPress={() => {
              top.value = withSpring(SIZES.height * 0.53, SPRING_CONFIG);
            }}
            onLongPress={() => {
              top.value = withSpring(SIZES.height * 1, SPRING_CONFIG);
            }}>
            <Icon name="sliders-h" size={28} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        <View style={HOME_STYLES.wrapper}>
          <View style={HOME_STYLES.msgWrapper}>
            <Text style={HOME_STYLES.msg}>¿Qué deseas revisar?</Text>
            <Text style={HOME_STYLES.msg2}>Desliza para ver más</Text>
          </View>

          <FlatList
            style={HOME_STYLES.flatlist}
            data={SENSOR_LIST}
            renderItem={({item}) => <VariablesList {...item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <ScrollView>
          <View style={HOME_STYLES.chartContainer}>
            {fullData.length > 0 ? (
              <Chart
                data={chartData}
                minDomain={{
                  x: fullData.length < 10 ? 0 : fullData.length - 10,
                  y: 0,
                }}
                maxDomain={{
                  x: fullData.length > 10 ? fullData.length : 10,
                  y: 70,
                }}
                yLabel="Temperatura [°C]"
                xAxis="xAxis"
                yAxis="yAxis"
              />
            ) : (
              <View>
                <ActivityIndicator size="large" color={COLORS.primary} />
                <Text style={HOME_STYLES.msg2}>
                  Un momento por favor, cargando gráfica...
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[style, HOME_STYLES.bottomSheet]}>
            <TouchableOpacity
              style={HOME_STYLES.sheetBtnWrapper}
              activeOpacity={0.7}
              onPress={() => {
                top.value = withSpring(SIZES.height * 1, SPRING_CONFIG);
              }}>
              <View style={HOME_STYLES.closeSheetBtn} />
            </TouchableOpacity>
            <BottomSheet />
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </>
  );
};

export default HomeScreen;
