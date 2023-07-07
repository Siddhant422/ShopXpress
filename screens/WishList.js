import { StyleSheet, Text, View,FlatList, RefreshControl} from 'react-native'
import React, { useState } from 'react'
import MenuItem from '../components/MenuItem';
import CartListScreen from './CartListSceen';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './Redux/actions/Actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';

const WishList = () => {
  const [cartValue, setCartValue] = useState(0);
  const [items, setItems] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(()=>{getDatabase()}, []);

  const getDatabase = async () => {
    try {
      const currUser = auth().currentUser;
      const res = await firestore().collection('users').doc(currUser.uid).get();
      const arr = res._data.cartItems;

      let data = [];
      let total = 0.0;
      await Promise.all(arr.map(async (item) => {
        const res = await firestore().collection('products').doc(item.category).get();
        const dataarr = res._data.products[item.productId];
        dataarr.quantityAdded = item.quantity;
        total += (dataarr.price*item.quantity);
        data.push(dataarr);
      }));
      
      setItems(data);
      setCartValue(total);
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    getDatabase();
    setIsRefreshing(false);
  }

  return (
    <View style={{flex:1, marginHorizontal: 10}}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing = {isRefreshing}
            onRefresh={() => handleRefresh()} 
          />
        } 
        data={items} 
        renderItem={({item, key})=>{
          return (
            <CartListScreen key={key} item={item}/>
          )
        }}
      >
      </FlatList>

     <View style={styles.checkoutView}>
      <View style={{flexDirection:'row',marginTop:25,justifyContent:'space-between'}}>
      <View style={{flexDirection:'column'}}>
      <Text style={{fontSize:17,color:'grey',fontWeight:'700'}}>Items:{items.length}</Text>
      <Text style={{fontSize:17,color:'grey',fontWeight:'700'}}>Total: ₹{cartValue}</Text>
      </View>
      <View style={{paddingLeft:30,paddingBottom:60}}>
      <TouchableOpacity style={styles.addToCart}>
        <Text style={{color:'white',fontWeight:'700'}}>{"Proceed To CheckOut ->"}</Text>
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