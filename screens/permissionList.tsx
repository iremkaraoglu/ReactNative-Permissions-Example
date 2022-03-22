import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PermissionsList({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.title}>Permission List</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CameraPermission')}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MicrophonePermission')}>
            <Text style={styles.buttonText}>Microphone</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ContactsPermission')}>
            <Text style={styles.buttonText}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CalendarPermission')}>
            <Text style={styles.buttonText}>Calendar</Text>
          </TouchableOpacity>
          {Platform.OS === 'android' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('SendSMSPermission')}>
              <Text style={styles.buttonText}>Messages</Text>
            </TouchableOpacity>
          )}
          {Platform.OS === 'ios' && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FaceIDPermission')}>
                <Text style={styles.buttonText}>Face ID</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ReminderPermission')}>
                <Text style={styles.buttonText}>Reminders</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PhotosPermission')}>
                <Text style={styles.buttonText}>Photos Library</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  root: {backgroundColor: '#4A266A', flex: 1},
  container: {
    alignContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 16,
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
    color: '#FFD9E8',
  },
  button: {
    backgroundColor: '#7F4A88',
    borderRadius: 32,
    justifyContent: 'center',
    marginTop: 24,
    alignSelf: 'center',
    width: 160,
  },
  buttonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFD9E8',
    margin: 16,
  },
});
