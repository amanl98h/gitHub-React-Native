import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Details from './screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import Users from './screens/Users';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Following from './screens/Following';
import Follower from './screens/Follower';
import { Text } from 'react-native';
import Repos from './screens/Repos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Following" component={Following} />
      <Stack.Screen name="Follower" component={Follower} />
      <Stack.Screen name="Repositories" component={Repos} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

