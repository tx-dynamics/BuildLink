import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import PlanScreen from './src/screens/appFlow/planscreen';
import SkilledApply from './src/screens/appFlow/skilledapply';
import SkilledHome from './src/screens/appFlow/skilledhome';
import { MainNavigator } from './src/services/navigation';
import appStyles from './src/services/utilities/appStyles';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={appStyles.flex1}>
        <SkilledApply />
      </SafeAreaView>
    );
  }
}

export default App;