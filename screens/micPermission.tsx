import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Platform
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {request, PERMISSIONS} from 'react-native-permissions';



export default function MicrophonePermissionScreen() {
    const [permissionResult, setPermissionResult] = React.useState("Not asked for permission")

    request(Platform.OS === 'ios' ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO).then((result) => {
      // …
      setPermissionResult(result)
      console.log(result)
    });

    return(
      <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <ScrollView
          style={styles.container}>
          <Text style={styles.title}>
            Microphone Permission Needed
          </Text>
          <Text
            style={styles.description}>
            This app needs access to your microphone. If you are not comfortable with
            this permission, you can go to settings and modify it at any time.
          </Text>
          <View style={{flexDirection: "row", marginHorizontal:16}}>
            <Text style={{justifyContent: "center", alignSelf: "center", alignContent: "center", fontSize: 18, fontWeight: "600", color: "#DE95BA" }}>
               Permission Result: 
            </Text>
            <Text style={{justifyContent: "center", alignSelf: "center", alignContent: "center", fontSize: 18, fontWeight: "600", color: "#FFD9E8", marginHorizontal: 16}}>
               {permissionResult}
            </Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#FFD9E8", marginVertical: 8}}>
            UNAVAILABLE:
            </Text>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#DE95BA"}}>
            	This feature is not available (on this device / in this context)
            </Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#FFD9E8", marginVertical: 8}}>
            DENIED:
            </Text>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#DE95BA"}}>
            The permission has not been requested / is denied but requestable
            </Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#FFD9E8", marginVertical: 8}}>
            GRANTED:
            </Text>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#DE95BA"}}>
            The permission is granted
            </Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#FFD9E8", marginVertical: 8}}>
            LIMITED:
            </Text>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#DE95BA"}}>
            The permission is granted but with limitations
            </Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#FFD9E8", marginVertical: 8}}>
            BLOCKED:
            </Text>
            <Text style={{fontSize: 18, fontWeight: "600", color: "#DE95BA"}}>
            The permission is denied and not requestable anymore
            </Text>
          </View>
        </ScrollView>
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
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
    color: '#FFD9E8',
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 24,
    marginBottom:16,
    color: '#FFD9E8',
  }
});