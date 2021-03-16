import React,{ useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Animated, TouchableOpacity, FlatList, TextInput  } from 'react-native';
import { Avatar, Paragraph, Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


const screenWidth = Dimensions.get('window').width


const listTab = [
  {
    status:"Today"
  },
  {
    status:"Yesterday"
  },
  {
    status:"All"
  }
]

const datas = [
  {
    name:"Ronaldo",
    status:"Today"
  },
  {
    name:"Messi",
    status:"Today"
  }
]

export default function VisitorsAdd(props){

  console.log(props)
  const [dataList, setDatList] = useState(datas)
  const[status, setStatus] = useState("Today")

  const setStatusFilter = status =>{
    setStatus(status)
  }


  const renderItem = ({item, index}) =>{
    return(
      <View style={styles.rescent_box}>
      <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
          <Text style={{fontWeight:'bold'}}>{item.name}</Text>
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
    );
  }

  return(
    <View style={{flex:1, backgroundColor:'white',}}>
      <Appbar.Header
      style={{backgroundColor:"black", borderColor:"black",elevation:0}}>
        
        <Appbar.Content title="Visitors"  />
        <Appbar.Action icon="plus-circle" onPress={()=>{props.route.props.navigation.navigate('VSADD')}} />
      </Appbar.Header>

      
      <View style={{backgroundColor:'white', paddingHorizontal:10}}> 
        <View style={styles.inputContainer}>
            <Icon name="search" size={28} />
            <TextInput
            underlineColorAndroid='transparent'
              style={{flex: 1, fontSize: 18, borderBottomColor:'red'}}
              placeholder="Search"
              
            />
        </View>
      </View>
      
                        
      <View style={styles.listtab}>
        {
          listTab.map(e => {
            if(e.status == status){
              console.log('+++ Match ++++');
              console.log(e.status)
              console.log(status)
              return(
                <TouchableOpacity 
                style={[styles.btntab, styles.btnTabActive ]}
                onPress={() => {setStatusFilter(e.status)}}>
                  <Text style={styles.texttab, styles.textTabActive}>
                    {e.status}
                  </Text>
                </TouchableOpacity>
              );
            }else{
              return(
                <TouchableOpacity 
                style={styles.btntab}
                onPress={() => {setStatusFilter(e.status)}}>
                  <Text style={styles.texttab}>
                    {e.status}
                  </Text>
                </TouchableOpacity>
              );
            }
            
          })
        }
      </View>
        

      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>



      
        <FlatList
        data={dataList}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}>
        </FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listtab:{
    flexDirection:"row",
    alignSelf:"center",
    marginBottom:20,
    backgroundColor:"white",
    padding:20,
    width:"100%"
  },
  btntab:{
    width:Dimensions.get('window').width /3.5,
    flexDirection:"row",
    borderWidth:0.5,
    borderColor:"black",
    padding:10,
    justifyContent:"center",
  },
  texttab:{
    fontSize:16,
    color:"black"
  },
  btnTabActive:{
    backgroundColor:"black"
  },
  textTabActive:{
    color:"white"
  },
  itemContainer:{
    flexDirection:"row",
    paddingVertical:15,
    backgroundColor:'white'
  },
  itemLogo:{
    paddingVertical:10
  },
  inputContainer: {
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin:10,
    backgroundColor:'#F5F5FA'
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
  },
});