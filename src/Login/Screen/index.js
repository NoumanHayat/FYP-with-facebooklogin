import React, {useState, Component, useRef} from 'react';
import {Icon} from 'native-base';
import {indexStyle as Styles} from '../Style/index';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
  Image
} from 'react-native';
 

const index = (props) => {
    const navigation = props.navigation;
    
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    
  };
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffff'}}
      showsVerticalScrollIndicator={false}>
      <Animated.View
        style={[
          ,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}>
        <ImageBackground
          source={require('../Images/welcomePage.jpg')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height / 1,
          }}>
          <Image
        style={Styles.logo} 
        source={require('../Images/Fitnessio-logos_white.png')}
      />
          <TouchableOpacity style={Styles.loginButton} onPress={()=>{fadeOut();setTimeout(()=>navigation.push('Login'),3100)}}>
            <Text style={Styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.loginButton} onPress={()=>{fadeOut();setTimeout(()=>navigation.push('createAccount'),3100)}}>
            <Text style={Styles.loginButtonText}>Create Account</Text>
          </TouchableOpacity>
          
        </ImageBackground>
      </Animated.View>
    </ScrollView>
  );
};
export default index;
