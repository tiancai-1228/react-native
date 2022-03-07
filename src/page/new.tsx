import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '@ant-design/react-native/lib/button';
import ToastExample from '../../ToastExample';
import Draggable from 'react-native-draggable';

function SettingsScreen() {
  const pupu = useRef(new Animated.Value(30)).current;
  const [isGo, setIsGo] = useState(false);

  function handlePuPu() {
    Animated.timing(pupu, {
      toValue: -800,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(pupu, {
        toValue: 30,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }, 200);
  }
  //   function pupuloop() {
  //     handlePuPu();
  //     setTimeout(() => {
  //       pupuloop();
  //     }, 400);
  //   }

  useEffect(() => {
    const test = setInterval(() => {
      handlePuPu;
    }, 400);
    if (isGo) {
      console.log('a');
      test;
    } else {
      console.log('b');
      clearInterval(test);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGo]);
  return (
    <>
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Button
          type="warning"
          style={{margin: 10}}
          onPress={() =>
            NativeModules.ToastExample.show(
              'Toast native moudle',
              ToastExample.SHORT,
            )
          }>
          我是antd Button
        </Button>
        <Animated.View>
          <Draggable
            x={100}
            y={100}
            isCircle
            renderText="(^u^)"
            // renderColor="grey"
            onShortPressRelease={() => setIsGo(true)}
            children={
              <>
                <Animated.View
                  style={{
                    transform: [{translateY: pupu}],
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: 'red',
                      marginLeft: 18,
                      marginBottom: -20,
                    }}
                  />
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: 'red',
                      marginLeft: 8,
                      marginBottom: -20,
                      marginTop: -18,
                    }}
                  />
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: 'red',
                      marginLeft: 7,
                      marginBottom: -20,
                    }}
                  />
                </Animated.View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setIsGo(true);
                  }}>
                  <Text style={styles.text}>(^u^)</Text>
                </TouchableOpacity>
              </>
            }
          />
        </Animated.View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // pupuloop();
            setIsGo(false);
          }}>
          <Text style={styles.text}>stop</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 60,
    width: 60,
    display: 'flex',
    borderRadius: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    display: 'flex',
    left: 0,
    bottom: 0,
  },

  text: {color: 'white', padding: 10},
});
export default SettingsScreen;
