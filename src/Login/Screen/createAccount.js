import React, {useState, Component, useRef} from 'react';

// import LinearGradient from 'react-native-linear-gradient';
import {SignupStyle as Styles} from '../Style/index';
import Icon from 'react-native-vector-icons/Entypo';
import {Input, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  Button,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';

const index = props => {
  const [isSelected, setSelection] = useState(false);
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
      >
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
          style={Styles.background}>
           
           <Text style={Styles.Fitnessio}>Fitnessio</Text>
        </ImageBackground>

        <View style={Styles.bottom}>
          <View style={Styles.bottomContainer}>
            <Text style={Styles.welcomeText}>Welcome</Text>
            <TouchableOpacity  onPress={()=>{fadeOut();setTimeout(()=>navigation.push('Login'),3001)}}>

            <Text style={{color: 'black'}}>
              Have Account? 
              <Text style={{color: 'red', padding:10,fontSize: 16}}>Login</Text>
              </Text>
              </TouchableOpacity>
              
            
          </View>
        </View>
        <View style={Styles.loginContainer}>
          <Input
            placeholder="User Name"
            leftIcon={<Icon name="user" size={15} color="black" />}
          />
          <Input
            placeholder="Email"
            secureTextEntry={true}
            leftIcon={<Icon name="email" size={15} color="black" />}
          />
          <Input
            placeholder="Password"
            leftIcon={<Icon name="lock" size={15} color="black" />}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" size={15} color="black" />}
          />
          <Input
            placeholder="Phone Number"
            leftIcon={<Icon name="phone" size={15} color="black" />}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" size={15} color="black" />}
          />
          <LinearGradient
            start={{x: 0.3, y: 0.25}}
            end={{x: 0.5, y: 0.70}}
            locations={[0.3, 1.6, 0.6]}
            colors={['#5a68c0', '#5b5757', '#211f1f']}
            style={Styles.linearGradient}>
            <Text style={Styles.buttonText}>Sign in Now</Text>
          </LinearGradient>
          
        </View>
      </Animated.View>
    </ScrollView>
  );
};
export default index;
