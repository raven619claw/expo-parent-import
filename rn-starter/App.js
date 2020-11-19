import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import StorybookUI from './src/screens/StorybookUI';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentsScreen,
    ListScreen,
    StorybookUI,
  },
  {
    initialRouteName: 'StorybookUI',
  }
);

export default createAppContainer(navigator);
