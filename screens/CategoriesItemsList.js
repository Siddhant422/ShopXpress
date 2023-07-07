import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import MenuItem from '../components/MenuItem'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoriesItemsList = ({navigation, route}) => {
  const category = route.params?.name;
  const [data, setData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getDatabase();
  }, [])

  const getDatabase = async () => {
    try {
      console.log(category);
      const res = await firestore().collection('products').doc(category).get();
      // console.log(res);
      setData(res._data.products);
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing = {isRefreshing}
            onRefresh={() => handleRefresh()} 
          />
        }
        style={{paddingHorizontal: 10}}
      >
        {
          data.map((item) => <MenuItem item={item} />)
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default CategoriesItemsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDE6ED'
  },
});