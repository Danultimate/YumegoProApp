import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

export class LoginView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>
     
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContaine, styles.loginButton]}
        onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
            <Text>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Continue with facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
          <View style={styles.socialButtonContent}>
            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
            <Text style={styles.loginText}>Sign in with google</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


export class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.nombre}>John Doe</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: LoginView,
  },
  Details: {
    screen: Profile,
  },
}, {
    initialRouteName: 'Home',
});

const styles = StyleSheet.create({
    header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  nombre:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContaine: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },

});
 
export default createAppContainer(AppNavigator);