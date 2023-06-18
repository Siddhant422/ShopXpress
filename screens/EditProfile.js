import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground,TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
const EditProfile = () => {
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
          source={{
      uri:"https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRhcml0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          }}
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
      <Text style={{marginTop:10, fontSize:18,fontWeight:'bold'}}>Pranjal Srivastava</Text>
      </View>
      <View style={styles.action}> 
     <FontAwesome name='user-o' size={20}></FontAwesome>
       <TextInput
       placeholder='First Name'
       placeholderTextColor={'#666666'}
       style={styles.textInput}
       autoCorrect={false}
       >
       </TextInput>
      </View>
      <View style={styles.action}> 
     <FontAwesome name='user-o' size={20}></FontAwesome>
       <TextInput
       placeholder='Last Name'
       placeholderTextColor={'#666666'}
       style={styles.textInput}
       autoCorrect={false}
       >
       </TextInput>
      </View>
      <View style={styles.action}> 
     <MaterialCommunityIcons name='email-outline' size={20}></MaterialCommunityIcons>
       <TextInput
       placeholder='Email'
       keyboardType='email-address'
       placeholderTextColor={'#666666'}
       style={styles.textInput}
       autoCorrect={false}
       >
       </TextInput>
      </View>
      <View style={styles.action}> 
     <FontAwesome name='mobile-phone' size={25}></FontAwesome>
       <TextInput
       placeholder='Phone'
       keyboardType='number-pad'
       placeholderTextColor={'#666666'}
       style={styles.textInput}
       autoCorrect={false}
       >
       </TextInput>
      </View>
      <View style={styles.action}> 
     <MaterialCommunityIcons name='map-marker' size={25}></MaterialCommunityIcons>
       <TextInput
       placeholder='City'
       placeholderTextColor={'#666666'}
       style={styles.textInput}
       autoCorrect={false}
       >
       </TextInput>
      </View>
      <View style={styles.action}> 
     <FontAwesome name='globe' size={20}></FontAwesome>
       <TextInput
       placeholder='Country'
       placeholderTextColor={'#666666'}
       style={styles.textInput}
       autoCorrect={false}
       >
       </TextInput>
      </View>
      <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
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