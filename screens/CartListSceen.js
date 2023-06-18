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
const CartListScreen = ({ item ,onRemoveItem }) => {
 const [arith,setArith]=useState([1]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onAddToCart = () => {
    console.log('item added');
     dispatch(addItemCart(item))
  }
  const addItem=(item)=>{
  item.qty=item.qty+1;
  setArith(item.qty)
  }
  const removeItem=(item)=>{
    item.qty=item.qty-1;
    if(arith<1)
    {
        item.qty=1
        onRemoveItem();
    }
    setArith(item.qty)
  }
  return (
    <View style={{ margin: 10 }}>
      <Pressable onPress={() => navigation.navigate('MenuScreen', { itemsd: item, onAddToCart: onAddToCart ,onRemoveItem:onRemoveItem})} style={{ flexDirection: 'row' }}>
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={{ aspectRatio: 5 / 6, height: 170 }}
            source={{ uri: item.image }}>
          </ImageBackground>
          <MaterialIcons name="highlight-remove" style={{ position: "absolute", right: 10, top: 10 }} color="white" size={24} onPress={()=>{onRemoveItem()}}/>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
          <View style={styles.descStyle}>
            <MaterialCommunityIcons name="star-circle" size={24} color="green" />
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: '400' }}>{item.rating}</Text>
            <Text style={{ marginLeft: 3 }}>• </Text>
            <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: '400' }}>{item.time} mins</Text>
          </View>
          <Text style={{ marginTop: 6 }}>{item.adress}</Text>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <FontAwesome name="rupee" size={22} style={{ marginLeft: 3 }} />
            <Text style={{ marginHorizontal: 10 }}>{item.cost_for_two} for two</Text>
          </View>
          {/* <View style={{ flexDirection: 'row' }}>
            <Fontisto name="motorcycle" size={24} style={{ marginTop: 7 }} />
            <Text style={{ marginTop: 9, marginLeft: 10 }}>Free Delivery</Text>
          </View> */}
          <View style={styles.descStyle}>
            <Pressable style={styles.addToCart} onPress={()=>{addItem(item)}}>
                <Text style={{color:'white' , fontWeight:'700'}}>+</Text>
            </Pressable>
            <Text style={{fontSize:18,marginHorizontal:12}}> {arith}</Text>
            <Pressable style={styles.addToCart} onPress={()=>{removeItem(item)}}>
                <Text style={{color:'white' , fontWeight:'700'}}>-</Text>
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
padding:16,
borderRadius:50,
width:40,
height:50
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