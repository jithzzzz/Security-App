import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback  } from 'react-native';
import { Avatar, Paragraph, TextInput, Button } from 'react-native-paper';


const screenWidth = Dimensions.get('window').width

export default function Login(props) {

  const [pho, setPho] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>

      <View style={{margin:20}}>
        <Text style={{fontWeight:'bolder', fontSize:30}}>LOG IN</Text>
        <Text style={{fontWeight:'medium', fontSize:16}}>Welcome back</Text>
      </View>
      <View style={{margin:20}}>
        <TextInput
          label="Email"
          value={pho}
          onChangeText={text => setPho(text)}
          style={{marginBottom:15}}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={{marginBottom:10}}
        />

        <TouchableWithoutFeedback>
          <Text style={{marginLeft:180, backgroundColor:'white', fontWeight:'normal'}}>Forgot Password</Text>
        </TouchableWithoutFeedback>

        <Button icon="login" mode="contained" 
        onPress={() => console.log('Pressed')}
        style={{backgroundColor:'black', height:50, alignitems:'center', paddingTop:9,
        marginTop:15}}
        onPress={()=>{props.navigation.navigate('Home')}}>
          LOG IN
        </Button>
      </View>

      <View style={{justifyContent:'center', alignItems:'center'}}>
        <TouchableWithoutFeedback>
          <Text 
          style={{margin:20, backgroundColor:'white', fontWeight:'normal'}}>
            Don't have an account? <Text style={{fontWeight:'bold',}}>Sign up here</Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    paddingTop:60
  },
});