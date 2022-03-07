import React, {useRef} from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
// import Test from '../img/test.png';
function Account() {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const rightValue = useRef(new Animated.Value(500)).current;
  const test = (i: any) => {
    console.log(i);
    if (i === 0) {
      Animated.timing(fadeIn, {
        toValue: 0,
        duration: 10,
        useNativeDriver: true,
      }).start();
    } else if (i === 1) {
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }
  };

  const backBall = (i: any) => {

    if (i === 0) {
      Animated.timing(rightValue, {
        toValue: 500,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else if (i === 1) {
      Animated.timing(rightValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  };

  const pageArray = [
    {
      title: 'Hello',
      description: 'React Native',
      //   image: require('../img/test.png'),
      imgStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fa931d',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backgroundColor: '#fa931d',
      fontColor: '#fff',
      level: 10,
    },
    {
      title: 'Hello',
      description: 'React Native',
      image: require('../img/test.png'),
      imgStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#a4b602',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      backgroundColor: '#a4b602',
      fontColor: '#fff',
      level: 10,
    },
  ];
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.center}>
        <View style={item.imgStyle}>
          <Text style={styles.textCenter}>{item.title}</Text>

          <Animated.View
            style={{
              opacity: fadeIn,
              transform: [{translateX: rightValue}],
            }}>
            <Image source={item.image} style={styles.img} />
          </Animated.View>
        </View>
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={pageArray}
      renderItem={renderItem}
      onSlideChange={i => {
        test(i);
        backBall(i)
      }}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
  },

  img: {height: 300, width: 300},
  animated: {
    color: 'grey',
    display: 'flex',
    textAlign: 'center',
  },
});

export default Account;
