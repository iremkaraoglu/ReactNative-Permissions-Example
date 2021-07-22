import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function PermissionsList({navigation}) {
    return(
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.root}>
          <View
            style={styles.container}>
            <Text style={styles.title}>
              Permission List
            </Text>
            <TouchableOpacity style={{ justifyContent: "center", marginTop: 48, alignSelf: "center"}} onPress={() => navigation.navigate("CameraPermission")}>
              <Text style={{justifyContent: "center", alignSelf: "center", alignContent: "center", fontSize: 18, fontWeight: "600", color: "#DDFFBC", margin: 16}}>
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent: "center", marginTop: 48, alignSelf: "center"}} onPress={() => navigation.navigate("MicrophonePermission")}>
            <Text style={{justifyContent: "center", alignSelf: "center", alignContent: "center", fontSize: 18, fontWeight: "600", color: "#DDFFBC", margin: 16}}>
                Microphone
              </Text>
            </TouchableOpacity>
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