import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchResultsList from './src/screens/SearchResultsList';
import ImageDetail from './src/screens/ImageDetail';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ResultsReducer from './src/reducers/ResultsReducer';

const navigator = createStackNavigator(
  {
    SearchResults: SearchResultsList,
    ImageDetail: ImageDetail
  },
  {
    initialRouteName: 'SearchResults',
    defaultNavigationOptions: {
      title: '101 Image App Challenge'
    }
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <Provider store={createStore(ResultsReducer)}>
      <AppContainer />
    </Provider>
  );
};

export default App;
