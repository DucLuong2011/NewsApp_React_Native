import React from 'react';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNews from './screens/components/AddNews';
import NewsProvider from './context/NewsProvider';
import DetailNews from './screens/components/DetailNews';
import NewsSecond from './screens/categoryNews/NewsSecond';
import ListCard from './screens/categoryNews/ListCard';
import Header from './screens/categoryNews/Header';


const Stack = createNativeStackNavigator();

const App = () => {
  return (<>
    <NavigationContainer>
      <NewsProvider>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home"  component={HomeScreen} />
          <Stack.Screen name="Add" component={AddNews}/>
          <Stack.Screen name="Detail" component={DetailNews} />
          <Stack.Screen name="ListCard" component={ListCard} />
        </Stack.Navigator>
      </NewsProvider>
    </NavigationContainer>
    </>)
}
export default App;

