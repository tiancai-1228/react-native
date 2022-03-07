import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Draggable from 'react-native-draggable';
function Like() {
  const rightValue = useRef(new Animated.Value(0)).current;
  const leftValue = useRef(new Animated.Value(0)).current;
  const pupu = useRef(new Animated.Value(30)).current;
  const opt = useRef(new Animated.Value(1)).current;
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  function gotop() {
    const data = currentY - 30;
    Animated.timing(leftValue, {
      toValue: data,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setCurrentY(data);
  }
  function goR() {
    const data = currentX + 30;
    Animated.timing(rightValue, {
      toValue: data,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setCurrentX(data);
  }
  function goL() {
    const data = currentX - 30;
    Animated.timing(rightValue, {
      toValue: data,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setCurrentX(data);
  }
  function goD() {
    const data = currentY + 30;
    Animated.timing(leftValue, {
      toValue: data,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setCurrentY(data);
  }

  function handlePuPu() {
    Animated.timing(pupu, {
      toValue: -800,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(pupu, {
        toValue: 30,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }, 300);
  }

  function shake() {
    // Animated.timing(leftValue, {
    //   toValue: 100,
    //   duration: 1000,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(opt, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(rightValue, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      //   Animated.timing(leftValue, {
      //     toValue: -100,
      //     duration: 1000,
      //     useNativeDriver: true,
      //   }).start();
      Animated.timing(rightValue, {
        toValue: -200,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 1000);

    setTimeout(() => {
      reload();
    }, 2000);
  }
  function reload() {
    Animated.timing(opt, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(leftValue, {
      toValue: currentY,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(rightValue, {
      toValue: currentX,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={{
            opacity: opt,
            transform: [{translateX: rightValue}, {translateY: leftValue}],
          }}>
          <Animated.View
            style={{
              transform: [{translateY: pupu}],
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                marginLeft: 30,
                marginBottom: -20,
              }}
            />
          </Animated.View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              //   ToastExample.show('Toast native module', ToastExample.SHORT);
              shake();
            }}>
            <Text style={styles.text}>(^u^)</Text>
          </TouchableOpacity>
          <Draggable
            x={100}
            y={100}
            isCircle
            renderColor="grey"
            renderText="(^u^)"
            onShortPressRelease={() => shake()}
          />
        </Animated.View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.buttonT}
          onPress={() => {
            gotop();
          }}>
          <Text style={styles.text}>t</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonR}
          onPress={() => {
            goR();
          }}>
          <Text style={styles.text}>r</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonP}
          onPress={() => {
            handlePuPu();
          }}>
          <Text style={styles.text}>PUPU</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonL}
          onPress={() => {
            goL();
          }}>
          <Text style={styles.text}>l</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonB}
          onPress={() => {
            //   clearInterval(move);
            goD();
          }}>
          <Text style={styles.text}>d</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 40,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  buttonT: {
    marginLeft: 250,
    height: 40,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  buttonR: {
    marginLeft: 300,
    height: 40,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  buttonL: {
    marginTop: -40,
    marginLeft: 200,
    height: 40,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  buttonB: {
    marginLeft: 250,
    height: 40,
    width: 50,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  buttonP: {
    marginTop: -40,
    marginLeft: 80,
    height: 40,
    width: 70,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  content: {
    display: 'flex',
    left: 0,
    bottom: 0,
  },

  text: {color: 'white', padding: 10},
});

export default Like;
