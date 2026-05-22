import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import PlayQuizScreen from './src/pages/PlayQuizScreen';
import ViewHighScoreScreen from './src/pages/ViewHighScoreScreen';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const MyApp: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlayQuiz" component={PlayQuizScreen} />
          <Stack.Screen name="ViewHighScore" component={ViewHighScoreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MyApp;
