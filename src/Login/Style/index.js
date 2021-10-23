import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
export const indexStyle = StyleSheet.create({
  loginButton: {
    border: 3,
    backgroundColor: '#523db2',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#4632A1',
    margin: 10,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    flex: 0.8,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 70,
  },
});
export const loginStyle = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 2.5,
  },
  logo:{
    width: 150,
    height: 150,
  },
  Fitnessio:{
    color:'white',
    fontSize: 32
  },
  bottom:{
   
    backgroundColor: 'white',
    
    borderTopStartRadius:45,
    borderTopEndRadius:45,
    bottom:35,
    
  },
  bottomContainer:{
    padding:45,
    paddingBottom:10
    
  },
  welcomeText:{
    color:'#1f1b5c',
    fontSize:23
  },
  loginContainer:{
    padding:30,
    paddingTop:10,
    paddingBottom:10
  },
  forgotPasswordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  checkbox:{
    fontSize: 15

  },
  forgotPassword:{
    paddingLeft:'10%'
  },
  forgotPasswordText:{
    color: 'blue',
    textAlign: 'right'
    
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export const SignupStyle = StyleSheet.create({
  background: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 3.9,
  },
  logo:{
    width: 150,
    height: 150,
  },
  Fitnessio:{
    color:'white',
    fontSize: 32
  },
  bottom:{
   
    backgroundColor: 'white',
    
    borderTopStartRadius:45,
    borderTopEndRadius:45,
    bottom:45,
    
  },
  bottomContainer:{
    padding:45,
    paddingBottom:10
    
  },
  welcomeText:{
    color:'#1f1b5c',
    fontSize:23
  },
  loginContainer:{
    padding:30,
    paddingTop:10,
    paddingBottom:10
  },
  forgotPasswordContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  checkbox:{
    fontSize: 15

  },
  forgotPassword:{
    paddingLeft:'10%'
  },
  forgotPasswordText:{
    color: 'blue',
    textAlign: 'right'
    
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
