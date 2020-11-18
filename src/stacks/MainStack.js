import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import preload from '../screens/preload'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Stack = createStackNavigator();
export default () => (
  
  <Stack.Navigator
  initialRouteName="Preload"
  screenOptions={{
    headerShown: false,
  }}
  >
    <Stack.Screen name="preload" component={preload}/>
    <Stack.Screen name="SignIn" component={SignIn}/>
    <Stack.Screen name="SignUp" component={SignUp}/>

  </Stack.Navigator>  
  
)