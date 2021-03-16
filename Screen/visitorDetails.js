


import React,{ useState } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView,  } from 'react-native';
import { Avatar, Paragraph, Appbar, Button } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function CreateVisitor(props){
    console.log(props)

    const [text, setText] = useState("")

    return(
        <View style={{flex:1, backgroundColor:'white',}}>

            <Appbar.Header style={{backgroundColor:"black", borderColor:"black",elevation:0}}>
            <Appbar.BackAction 
            onPress={()=>{props.navigation.navigate("tabs")}} />
                <Appbar.Content title="Visitors Pass"  />
            </Appbar.Header>

            <ScrollView 
            showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
            style={{paddingHorizontal:15, backgroundColor:'#f5f3ed'}}>
                <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20}}>
                    <Text style={{fontWeight:'bold', fontSize:18}}>Visitors Pass</Text>
                </View>
                <Fumi
                    label={'Name'}
                    iconClass={FontAwesomeIcon}
                    iconName={'user'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}  
                    style={{margin:10}}                 
                />

                <Fumi
                    label={'Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'map-marker'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}
                    style={{margin:10}}                 
                />

                <Fumi
                    label={'Place'}
                    iconClass={FontAwesomeIcon}
                    iconName={'location-arrow'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}   
                    style={{margin:10}}                 
                />

                <Fumi
                    label={'Who do you want to meet'}
                    iconClass={FontAwesomeIcon}
                    iconName={'eercast'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}   
                    style={{margin:10}}              
                />
                

                <Fumi
                    label={'Visit Type'}
                    iconClass={FontAwesomeIcon}
                    iconName={'legal'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}   
                    style={{margin:10}}                 
                />


                <Fumi
                    label={'Purpose of Visit'}
                    iconClass={FontAwesomeIcon}
                    iconName={'grav'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}   
                    style={{margin:10}}                 
                />

                <Fumi
                    label={'Flat No.'}
                    iconClass={FontAwesomeIcon}
                    iconName={'microchip'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}   
                    style={{margin:10}}                 
                />

                <Fumi
                    label={'Mobile Number'}
                    iconClass={FontAwesomeIcon}
                    iconName={'mobile-phone'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}   
                    style={{margin:10}}                 
                />

                <Fumi
                    label={'Email'}
                    iconClass={FontAwesomeIcon}
                    iconName={'envelope'}
                    iconColor={'black'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    onChangeText={(text) => { setText(text)}}   
                    style={{margin:10}}                 
                />

<Button icon="content-save-cog" mode="contained" 
        onPress={() => console.log('Pressed')}
        style={{backgroundColor:'black', height:50, alignitems:'center', paddingTop:9,
        margin:10}}
        onPress={()=>{props.navigation.navigate('PROPICK')}}>
          Save
        </Button>



            </ScrollView>

        </View>
  );
}

const styles = StyleSheet.create({
 
});