import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Chart from '../components/Chart';
import ScreenTitle from '../components/ScreenTitle';
import {layout} from '../styles/Layout';
import {THEME} from '../styles/Theme';

const DetailScreen = ({navigation, route, animated}) => {
  const {title, items} = route.params;
  return (
    <Animated.View
      style={{...layout.container, ...animated, paddingHorizontal: 0}}>
      <View style={layout.altContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={layout.toggleDrawer}
          onPress={() => navigation.toggleDrawer()}>
          <Icon size={32} name="th-large" color={THEME.COLORS.secondary} />
        </TouchableOpacity>

        <ScreenTitle title={title} />
      </View>
      {items && items.length === 1 ? (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          {items.map((item, i) => (
            <Chart
              key={i}
              path={item.path}
              title={item.sensor}
              ySuffix={item.suffix}
              xSuffix={item.suffix}
              maxLimit={item.limit}
              yOffset={item.yOffset}
              xOffset={item.xOffset}
              name={item.name}
            />
          ))}
        </ScrollView>
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {items.map((item, i) => (
            <Chart
              key={i}
              path={item.path}
              title={item.sensor}
              ySuffix={item.suffix}
              xSuffix={item.suffix}
              maxLimit={item.limit}
              yOffset={item.yOffset}
              xOffset={item.xOffset}
              name={item.name}
            />
          ))}
        </ScrollView>
      )}
    </Animated.View>
  );
};

export default DetailScreen;
