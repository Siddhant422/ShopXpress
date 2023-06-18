import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuItem from '../components/MenuItem'
import hotels from '../data/hotels';
const CategoriesItemsList = ({navigation, route}) => {
  const data = hotels;
  const data2=route.params.pitems;
  return (
    <View>
       {data2.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </View>
  )
}

export default CategoriesItemsList

const styles = StyleSheet.create({})