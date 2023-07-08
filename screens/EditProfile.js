import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground,TextInput, PermissionsAndroid} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  EvilIcons  from 'react-native-vector-icons/EvilIcons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const [newData, setNewData] = useState({
    name: '',
    phoneNo: '',
    pincode: '',
    city: '',
    state: ''
  });
  const [cameraPhoto, setCameraPhoto] = useState('');

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if(granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  }

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setCameraPhoto(result.assets[0].uri);
  }

  const handleUpdate = async () => {
    try {
      const currUser  = auth().currentUser;
      await firestore()
      .collection('users')
      .doc(currUser.uid)
      .update({...newData});

      alert('Data Updated');
      navigation.goBack();
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{margin:20}}>
        <View style={{alignItems:'center'}}>
          <TouchableOpacity>
            <View style={{
              height:100,
              width:100,
              borderRadius:15,
              justifyContent:'center',
              alignItems:'center'
            }}>
              <ImageBackground
              source={require('../assets/profile.png')}
              style={{height:100,width:100}}
              imageStyle={{borderRadius:20}}
              >
                <View style={{
                  flex:1,
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  <Text>
                    <Icon name='camera-alt' color={'white'} size={30}
                    style={{
                      opacity:0.7,
                      alignItems:'center',
                      justifyContent:'center',
                      borderWidth:1,
                      borderColor:'#fff',
                      borderRadius:10,
                    }}
                    ></Icon>
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        {/* <Text style={{marginTop:10, fontSize:18,fontWeight:'bold'}}>Pranjal Srivastava</Text> */}
        </View>

        <View style={styles.action}> 
          <FontAwesome name='user-o' size={20} />
          <TextInput
            placeholder='Name'
            placeholderTextColor={'#666666'}
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={text => setNewData({...newData, name: text})}
          >
          </TextInput>
        </View>

        <View style={styles.action}> 
          <FontAwesome name='mobile-phone' size={25} />
          <TextInput
            placeholder='Phone Number'
            keyboardType='number-pad'
            maxLength={10}
            placeholderTextColor={'#666666'}
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={text => setNewData({...newData, phoneNo: text})}
          >
          </TextInput>
        </View>

        <View style={styles.action}> 
          <MaterialCommunityIcons name='map-marker' size={25}/>
          <TextInput
            placeholder='Pin Code'
            keyboardType='number-pad'
            maxLength={6}
            placeholderTextColor={'#666666'}
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={text => setNewData({...newData, pincode: text})}
          >
          </TextInput>
        </View>

        <View style={styles.action}> 
          <MaterialCommunityIcons name='city' size={25}/>
          <TextInput
            placeholder='City'
            placeholderTextColor={'#666666'}
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={text => setNewData({...newData, city: text})}
          >
          </TextInput>
        </View>

        <View style={styles.action}> 
          <FontAwesome name='map' size={20} />
          <TextInput
            placeholder='State'
            placeholderTextColor={'#666666'}
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={text => setNewData({...newData, state: text})}
          >
          </TextInput>
        </View>

        <TouchableOpacity style={styles.commandButton} onPress={()=>handleUpdate()}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E52B50',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});