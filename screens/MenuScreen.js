import { StyleSheet,ImageBackground,ScrollView,Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useState } from 'react'
import { Button } from 'react-native-paper';

const MenuScreen = ({navigation,route}) => {
  const itemd=route.params.itemsd;
  const onAddToCart = route.params.onAddToCart;
  const onRemoveItem=route.params.onRemoveItem;
  const MyFun = (item) => {
    try {
      onAddToCart(item);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScrollView style={{flex:1}}>
      <View style={styles.childContainer}>
        <View>
        <ImageBackground style={styles.image} source={{uri:itemd.image}}>
      </ImageBackground>
      <Icon name ="hearto" style = {{position: "absolute", right:10, top:10}} color="white" size={24}/>
        </View>
        <View style = {{flexDirection:'column',marginLeft: 10}}>
                <Text style={styles.title}>{itemd.name}</Text>
                <View style={{marginHorizontal:10}}>
                <Text style ={styles.title}>₹{itemd.cost_for_two}</Text>
                </View>
                
            </View>
     
      <Text style={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Text>
      </View>
        <View>
        <Button theme={{ colors: { primary: '#E52B50' } }} rippleColor={'pink'} textColor='white' isAddedicon="cart" mode="contained" onPress={() =>MyFun(itemd)}>Add to cart</Button>
        </View>
      <View style = {{marginLeft: 10,marginTop:10}}>
            <Text style = {{fontSize:16}}>Details:</Text>
            <View style = {styles.descStyle}>
                <MaterialCommunityIcons name="star-circle" size={24} color="green" />
                <Text style = {{marginLeft: 3, fontSize: 15 ,fontWeight: '400'}}>{itemd.rating}</Text>
                <Text style = {{marginLeft: 3}}>•</Text>
                <Text style = {{marginLeft: 3, fontSize: 15 ,fontWeight: '400'}}>{itemd.time} mins</Text>
            </View>
            <Text style ={{marginTop:6}}>{itemd.adress}</Text>
            {/* <View style = {{flexDirection:'row', marginTop: 6}}>
                <FontAwesome name = "rupee" size = {22} style = {{marginLeft:3}}/>
                <Text style = {{marginHorizontal: 10}}>{itemd.cost_for_two} for two</Text>
            </View> */}
            <View style = {{flexDirection: 'row'}}>
                <Fontisto name = "motorcycle" size ={24} style = {{marginTop:7}}/>
                <Text style ={{marginTop:9, marginLeft: 10,marginBottom:25}}>Free Delivery</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default MenuScreen

const styles = StyleSheet.create({
  childContainer:{
    width:'100%',
   paddingHorizontal:15,
   paddingVertical:10,

  },
  rootContainer:{
    margin:0,
    padding:1
    
  },
  descStyle : {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
},
  image:{
    width:'100%',
    height:250,
},
title:{
  fontWeight:'bold',
  fontSize:30,
  padding:8,
  textAlign:'left',
  color:'black'
},
subTitle:{
  fontSize:12,
  color:'black',
  fontWeight:'400',
  letterSpacing:1,
  opacity:0.5,
  maxWidth:'95%',
  maxHeight:85,
  marginBottom:18,
  paddingHorizontal:8,
}
})