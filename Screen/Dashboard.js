import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, SafeAreaView, ScrollView  } from 'react-native';
import { Avatar, Paragraph } from 'react-native-paper';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

const screenWidth = Dimensions.get('window').width

export default function Dashboard() {



  const data = [
    { name: 'Today', population: 21500000, color: '#e3e3e3', legendFontColor: '#7F7F7F', legendFontSize: 16 },
  { name: 'Yesturday', population: 2800000, color: '#a4a5ba', legendFontColor: '#7F7F7F', legendFontSize: 16 },
  { name: 'This Week', population: 527612, color: 'black', legendFontColor: '#7F7F7F', legendFontSize: 16 },
  
]


const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          
      <View style={styles.headerTab}>

        <View style={{flex:1}}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Dashboard</Text>
          <Text style={{fontWeight:'bold', marginTop:15}}><Avatar.Icon size={22} icon="thumb-up" /> Hi, JITHEESH</Text>
        </View>

        <View style={{ backgroundColor:'white'}}>
          <Avatar.Icon size={30} icon="cog" />
        </View>

      </View>

      <View style={{flex:1, padding:10}}>
        <PieChart
          data={data}
          width={screenWidth-40}
          height={150}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
       

      <View style={{flexDirection:'row', margin:5}}>
        <View 
        style={{backgroundColor:'#e3e3e3', alignItems:'center', 
        justifyContent:'center', flex:1, padding:20, margin:10}}>
          <Text style={{}}>VISITORES IN</Text>
          <Text style={{fontWeight:'bold', fontSize:18, marginTop:5}}>5</Text>
        </View>
        <View 
        style={{backgroundColor:'#e3e3e3', alignItems:'center', 
        justifyContent:'center', flex:1, padding:20, margin:10}}>
          <Text>VISITORES IN</Text>
          <Text style={{fontWeight:'bold', fontSize:18, marginTop:5}}>5</Text>
        </View>
      </View>
      
      <View style={{flexDirection:'row', margin:20}}>
        <View style={{flex:1}}>
          <Text>RECENT VISITORS</Text>
        </View>
        <View>
          <Text>SEE ALL</Text>
        </View>
      </View>

      <View style={styles.rescent_box}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text style={{fontWeight:'bold'}}>Ajith Jhon</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Flat No 103</Text>
          </View>
        </View>
        <View style={{flex:1, paddingTop:15, paddingBottom:15}}>
          <Paragraph>
          Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container.
          </Paragraph>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text>In Time:</Text>
          </View>
          <View>
            <Text>Out Time:</Text>
          </View>
        </View>
      </View>

      <View style={styles.rescent_box}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text style={{fontWeight:'bold'}}>Ajith Jhon</Text>
          </View>
          <View>
            <Text style={{fontWeight:'bold'}}>Flat No 103</Text>
          </View>
        </View>
        <View style={{flex:1, paddingTop:15, paddingBottom:15}}>
          <Paragraph style={{}}>
          Toggle buttons can be used to group related options. To emphasize groups of related toggle buttons, a group should share a common container.
          </Paragraph>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1}}>
            <Text>In Time:</Text>
          </View>
          <View>
            <Text>Out Time:</Text>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingVertical:30,
  },
  headerTab:{
    flexDirection:'row',
    //backgroundColor:'red',
    padding:20,
  },
  rescent_box:{
    padding:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});