import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PermissionScreen() {
    return(
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.root}>
          <View
            style={styles.container}>
            <Text style={styles.title}>
              Camera Permission Needed
            </Text>
            <Text
              style={styles.description}>
              This app needs access to your camera. If you don't comfortable with
              this permission, you can go to settings and modify it at any time.
            </Text>
          </View>
        </SafeAreaView>
      </>
    );
}
const styles = StyleSheet.create({
    root: {backgroundColor: '#52734D', flex: 1},
    container: {
      alignContent: 'center',
      alignSelf: 'center',
      marginHorizontal: 16,
      marginTop: 156,
    },
    title: {
      fontSize: 24,
      fontWeight: '800',
      alignSelf: 'center',
      color: '#FEFFDE',
    },
    description: {
      fontSize: 21,
      fontWeight: '600',
      alignSelf: 'center',
      marginTop: 32,
      color: '#FEFFDE',
    }
  });