import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import CommunityScreen from './src/screens/appFlow/communityscreen';
import PlanScreen from './src/screens/appFlow/planscreen';
import SkilledApply from './src/screens/appFlow/skilledapply';
import SkilledHome from './src/screens/appFlow/skilledhome';
import SkilledProfile from './src/screens/appFlow/skilledprofile';
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