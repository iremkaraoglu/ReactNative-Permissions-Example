import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {request, PERMISSIONS} from 'react-native-permissions';



export default function PermissionScreen() {
    const [permissionResult, setPermissionResult] = React.useState("Not asked for permission")

    request(PERMISSIONS.IOS.CAMERA).then((result) => {
      // …
      setPermissionResult(result)
      console.log(result)
    });

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
            <TouchableOpacity style={{backgroundColor: '#DDFFBC', borderRadius: 32, justifyContent: "center", marginTop: 48, alignSelf: "center"}} onPress={() => request}>
              <Text style={{justifyContent: "center", alignSelf: "center", alignContent: "center", fontSize: 18, fontWeight: "600", color: "#1C281A", margin: 16}}>
                Ask for permission
              </Text>
            </TouchableOpacity>
            <Text style={{justifyContent: "center", alignSelf: "center", alignContent: "center", fontSize: 18, fontWeight: "600", color: "#DDFFBC", margin: 16}}>
               Permission Result: {permissionResult}
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