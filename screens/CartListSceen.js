import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addItemCart } from '../screens/Redux/actions/Actions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useState } from 'react'
const CartListScreen = ({ item }) => {
  const navigation = useNavigation();
  
  return (
    <View style={{marginTop: 10, padding: 10, borderRadius: 15, backgroundColor: 'white' }}>
      <Pressable onPress={() => navigation.navigate('MenuScreen', {item: item})} style={{ flexDirection: 'row' }}>
        <View style={{marginRight: 5}}>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{height: 150, width: 150, backgroundColor: '#9AC5F4', borderRadius: 15}}
            source={
              (item.photos == '') ? 
              require('../assets/shopping.png') :
              {uri: item.photos}
            }>
          </ImageBackground>
          <Icon name="hearto" style={{ position: "absolute", right: 10, top: 10 }} color="white" size={24} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <FontAwesome name="rupee" size={22} style={{ marginLeft: 3 }} />
            <Text style={{ marginHorizontal: 10, fontSize: 15, }}>{item.price}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Fontisto name="clock" size={20} style={{ marginTop: 7 }} />
            <Text style={{ marginTop: 9, marginLeft: 10, fontSize: 15,}}>{item.deliveryTime}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Fontisto name="motorcycle" size={24} style={{ marginTop: 7 }} />
            <Text style={{ marginTop: 9, marginLeft: 10, fontSize: 15, }}>Free Delivery</Text>
          </View>
          <View style={styles.descStyle}>
            <Pressable style={styles.addToCart} onPress={()=>{}}>
              <Text style={{color:'white' , fontWeight:'700', fontSize: 25, textAlign: 'center'}}>+</Text>
            </Pressable>
            <Text style={{fontSize:18,marginHorizontal:12}}> {item.quantityAdded}</Text>
            <Pressable style={styles.addToCart} onPress={()=>{}}>
              <Text style={{color:'white' , fontWeight:'bold', fontSize: 25, textAlign: 'center'}}>-</Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default CartListScreen

const styles = StyleSheet.create({
    addToCart:{
      backgroundColor:'#E52B50',
      borderRadius:50,
      width:35,
      height:35,
      // justifyContent: 'center',
      // alignItems: 'center'
      // textAlign: 'center',
    },
    addRemoveView:{
      flexDirection:'row',
    },
    descStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
    },
})