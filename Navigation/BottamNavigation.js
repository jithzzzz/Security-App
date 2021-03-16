
import React, { useEffect } from 'react';
import { BottomNavigation, Text, icon } from 'react-native-paper';

import Dashboard from "../Screen/Dashboard";
import VisitorsAdd from "../Screen/visitoradd";
import Profile from "../Screen/userprofile";


const BottamNavigator = (props) =>{
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
        { key: 'Home', title: 'Home', icon: 'home', props:props},
        { key: 'Visitors', title: 'Visitors', icon: 'chart-bar', props:props,},
        { key: 'Profile', title: 'Profile', icon: 'account-cowboy-hat', props:props, },]);
  
  const renderScene = BottomNavigation.SceneMap({
        Home: Dashboard,
        Visitors:VisitorsAdd,
        Profile: Profile,
  });

  return(
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{backgroundColor:"black"}}
        />
  );
}

export default BottamNavigator