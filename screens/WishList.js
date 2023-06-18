import { StyleSheet, Text, View,FlatList} from 'react-native'
import React, { useState } from 'react'
import MenuItem from '../components/MenuItem';
import CartListScreen from './CartListSceen';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './Redux/actions/Actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
const WishList = () => {
  const cartData=useSelector(state=>state);
  const dispatch=useDispatch();
  const getTotal=()=>{
    let totally=0;
    cartData.map(item=>{
      totally=totally+item.qty*item.cost_for_two;
    }
    )
    return totally;
  }
  return (
    <View style={{flex:1}}>
     <FlatList data={cartData} renderItem={({item,index})=>{
      return(
        <CartListScreen key={index} item={item} onRemoveItem={()=>{
          dispatch(removeFromCart(index))
        }}>
        </CartListScreen>
        // <Text>added</Text>
      )
     }}>
     </FlatList>

     <View style={styles.checkoutView}>
      <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between'}}>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontSize:17,color:'grey',fontWeight:'700'}}>Items:{cartData.length}</Text>
      <Text style={{fontSize:17,color:'grey',fontWeight:'700'}}>Total: ₹{getTotal()}</Text>
      </View>
      <View style={{paddingLeft:30,paddingBottom:60}}>
      <TouchableOpacity style={styles.addToCart}>
        <Text style={{color:'white',fontWeight:'700'}}>Proceed To CheckOut -></Text>
     </TouchableOpacity>
      </View>
      </View>
     </View>
    </View>
  )
}

export default WishList

const styles = StyleSheet.create({
  checkoutView:{
    width:'100%',
    height:150,
    backgroundColor:'#fff',
    position:'absolute',
    bottom:0,
    elevation:8,
    flexDirection:'row',
    justifyContent:'space-evenly',
      },
      addToCart:{
        backgroundColor:'#E52B50',
        padding:16,
        borderRadius:10,
        width:200,
        height:50,
            },
})