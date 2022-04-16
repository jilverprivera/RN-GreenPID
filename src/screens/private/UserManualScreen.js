import React from 'react';
import {ScrollView} from 'react-native';

import list from '../../config/manuals_list.json';

import {Header} from '../../components/core';
import Card from '../../components/manuals/card';

import {GLOBAL_STYLES} from '../../styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const UserManualScreen = () => {
  return (
    <SafeAreaView style={GLOBAL_STYLES.screenContainer}>
      <Header title="Manuales de usuario" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={GLOBAL_STYLES.screenWrapper}>
        {list.map(manual => (
          <Card key={manual.id} {...manual} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserManualScreen;
