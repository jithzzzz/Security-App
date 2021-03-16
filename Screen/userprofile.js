import * as React from 'react';
import { Text, View, StyleSheet, Dimensions  } from 'react-native';
import { Avatar, Paragraph,Appbar } from 'react-native-paper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

export default function Profile(props){
  return(
    <Appbar.Header 
          style={{backgroundColor:"#ff4800", borderColor:"#ff4800",elevation:0}}>
            <Appbar.BackAction 
            onPress={()=>{props.navigation.navigate("Exp")}} />
            <Appbar.Content title="Add Expense"  />
            <Appbar.Action 
            icon="plus-circle" 
            onPress={()=>{props.navigation.navigate("Exptype")}} />
          </Appbar.Header>
  );
}