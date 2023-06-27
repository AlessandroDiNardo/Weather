import * as React from 'react';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screens
import Login from '../screens/Login';
import Home from '../screens/Home';
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={Login}
        options= {{ 
          title: 'Login' 
        }}/>
        

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options= {{ 
            title: 'Home' 
        }}/>

        <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        options= {{ 
            title: 'SignIn' 
        }}/>

        <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options= {{ 
            title: 'SignUp' 
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
