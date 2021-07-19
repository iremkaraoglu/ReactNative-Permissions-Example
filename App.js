/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            alignContent: 'center',
            alignSelf: 'center',
            marginHorizontal: 16,
          }}>
          <Text style={{fontSize: 24, fontWeight: '800', alignSelf: 'center'}}>
            Camera Permission Needed
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              alignSelf: 'center',
              marginTop: 16,
            }}>
            This app needs access to your camera. If you don't comfortable with this permission, you can go to settings and modify it at any time.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
