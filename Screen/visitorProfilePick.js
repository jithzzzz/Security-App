import React,{ useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList, TextInput  } from 'react-native';
import { Avatar, Paragraph, Appbar, Card, Title, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';







export default function ProfilePick(props){
    console.log(props)
    const [imageProfile, setImageProfile] = useState('https://picsum.photos/700');
    const [imageProof, setImageProof] = useState('https://picsum.photos/700');
    const [m1, setM1] = useState(null)
    const [m2, setM2] = useState(null)
    const [p, setP] = useState(false)
    const [pr, setPr] = useState(false)
    const [substatus, setSubstatus] = useState(false)
    

    const [hasPermission, setHasPermission] = useState(null);
    const [md, setMd] = useState(null)

    
    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            skipBackup: true,
            path: 'images',
        });

        console.log(result);

        if (!result.cancelled) {
            console.log("&&&&&&&&&")
            setImageProfile(result.uri);
            setM1(result)
        }
        else{
            console.log('Canceld')
        }
    };

    const pickImageProof = async () => {
        let result = await ImagePicker.launchCameraAsync({
            skipBackup: true,
            path: 'images',
        });

        console.log(result);

        if (!result.cancelled) {
            console.log("*****************")
            setImageProof(result.uri);
            setM2(result)
        }
        else{
            console.log('Canceld')
        }
    };

    const createFormData = (photo, body) => {
        const data = new FormData();
      
        data.append("photo", {
          name: photo.fileName,
          type: photo.type,
          uri:
            Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
        });
      
        Object.keys(body).forEach(key => {
          data.append(key, body[key]);
        });
        console.log("@@@@@@@@@@@@@@")
        console.log(data)
      
        return data;
    };

    const handleUploadPhoto = () => {
        if(substatus == true){
            fetch("http://localhost:3000/api/upload", {
            method: "POST",
            body: createFormData(m1, { userId: "123" })
            })
            .then(response => response.json())
            .then(response => {
                console.log("upload succes", response);
                alert("Upload success!");
                //this.setState({ photo: null });
            })
            .catch(error => {
                console.log("upload error", error);
                alert("Upload failed!");
            });
        }
      };

    return(
    <View style={{flex:1, backgroundColor:'white',}}>

      <Appbar.Header style={{backgroundColor:"black", borderColor:"black",elevation:0}}>
          <Appbar.Content title="Upload Documents"  />
      </Appbar.Header>
      
      <View style={{flexDirection:'row', margin:15}}>
          <View style={{width:"45%",marginLeft:10, }}>
              <Card >
                <Card.Title title="Image"  />
                <Card.Cover source={{ uri: imageProfile }} style={{height:100, borderRadius:10 }} />
                </Card>
          </View>
          <View style={{width:"45%",marginLeft:15}}>
              <Card>
                <Card.Title title="Id Proof"  />
                <Card.Cover source={{ uri: imageProof }} style={{height:100, borderRadius:10 }} />
                </Card>
          </View>
      </View>

      <View style={{paddingHorizontal:25, marginTop:25}}>
          <TouchableOpacity style={ styles.rescent_box } onPress={()=>{pickImage()}}>
              <View style={{flexDirection:'row'}}>
                  <View style={{}}>
                    <Avatar.Icon size={30} icon="account-box" />
                  </View>
                  <View style={{paddingLeft:10}}>
                      <Text style={{fontSize:14, fontWeight:'bold'}}>Take Picture</Text>
                  </View>
                  <View style={{}}>

                  </View>
              </View>
          </TouchableOpacity>
      </View>

      <View style={{padding:25}}>
          <TouchableOpacity style={ styles.rescent_box } onPress={()=>{ pickImageProof()}}>
              <View style={{flexDirection:'row'}}>
                  <View style={{}}>
                    <Avatar.Icon size={30} icon="file-document" />
                  </View>
                  <View style={{paddingLeft:10}}>
                      <Text style={{fontSize:14, fontWeight:'bold'}}>Scan ID Proof</Text>
                  </View>
                  <View style={{}}>

                  </View>
              </View>
          </TouchableOpacity>
      </View>

      
      <Button icon="cloud-upload" mode="contained" 
        onPress={() => console.log('Pressed')}
        style={{backgroundColor:'black', height:50, alignitems:'center', paddingTop:9,
        margin:20}}
        onPress={handleUploadPhoto}>
          Upload
        </Button>

    </View>
  );
}

const styles = StyleSheet.create({
    rescent_box:{
        padding:25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
          },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:'white'
      },
});