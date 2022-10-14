import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import PlanScreen from './src/screens/appFlow/planscreen';
import { MainNavigator } from './src/services/navigation';
import appStyles from './src/services/utilities/appStyles';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={appStyles.flex1}>
        <MainNavigator />
      </SafeAreaView>
    );
  }
}

export default App;