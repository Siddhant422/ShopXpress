import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ToastAndroid
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import items from '../../data/Category';
import { useEffect } from 'react';
import product from '../../data/Schema/productSchema';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const SellProductForm = ({navigation, route}) => {
  const [finalProduct, setFinalProduct] = useState(product);
  const [showLoader, setShowLoader] = useState(false);

  const userData = route.params.userData;

  let categories = [];
  items.map((item) => categories.push(item.name));

  const handleSellProduct = async () => {
    if(finalProduct.name == '') {
      ToastAndroid.show('Please Enter the Name of the Product', ToastAndroid.BOTTOM);
    }
    else if(finalProduct.price == 0.0) {
      ToastAndroid.show('Please Enter the Price of the Product', ToastAndroid.BOTTOM);
    }
    else if(finalProduct.quantity == 0) {
      ToastAndroid.show('Please Enter the Quantity of the Product', ToastAndroid.BOTTOM);
    }
    else if(finalProduct.details == '') {
      ToastAndroid.show('Please Enter some details of the Product', ToastAndroid.BOTTOM);
    }
    else if(finalProduct.category == '') {
      ToastAndroid.show('Please select a category of the Product', ToastAndroid.BOTTOM);
    }
    else {
      setShowLoader(true);
      try {
        const currUser  = auth().currentUser;
        const res = await firestore().collection('products').doc(finalProduct.category).get();
        const resarr = res._data.products;
        finalProduct.id = resarr.length;
        finalProduct.sellerid = currUser.uid;
        
        await firestore()
        .collection('products')
        .doc(finalProduct.category)
        .update({'products': firestore.FieldValue.arrayUnion(finalProduct)});
        
        const newProd = {category: finalProduct.category, productId: finalProduct.id};
        await firestore()
        .collection('users')
        .doc(currUser.uid)
        .update({'productsListed': firestore.FieldValue.arrayUnion(newProd)});

        navigation.goBack();
        alert('Product Listed');
        setShowLoader(false);
      }
      catch(err) {
        setShowLoader(false);
        console.log(err);
      }
    }
  };

  return (
    <SafeAreaView>
      <Spinner
          visible={showLoader}
          size={50}
      />
      <ScrollView>
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,

          }}>
          <Avatar.Image
            source={require('../../assets/profile.png')}
            size={110}
          />
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
            }}>
            {userData.name}
          </Text>
          <View style ={{flexDirection: 'row', gap :10}}>
          <Icons name="star-circle" size={24} color="green" />
          <Text>Certified Seller </Text>
          </View>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            onChangeText={text => setFinalProduct({...finalProduct, name: text})}
          />

          <TextInput
            style={styles.input}
            placeholder="Product Price"
            onChangeText={text => setFinalProduct({...finalProduct, price: text})}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Product Quantity"
            onChangeText={text => setFinalProduct({...finalProduct, quantity: text})}
            keyboardType="numeric"
          />

          <TextInput
            editable
            multiline
            style={styles.biginput}
            placeholder="Product Details"
            onChangeText={text => setFinalProduct({...finalProduct, details: text})}
          />

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={finalProduct.category}
              onValueChange={itemValue => setFinalProduct({...finalProduct, category: itemValue})}>
              <Picker.Item label="Select Category" value="" />
              {categories.map(
                category => (
                  <Picker.Item key={category} label={category} value={category} />
                ))
              }
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => handleSellProduct()}>
            <Icon
              name="cart-plus"
              size={20}
              color="#fff"
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Sell Product</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 0,
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    marginBottom: 50,
  },
  input: {
    height: 45,
    marginBottom: 10,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#E5e4e2',
  },
  biginput: {
    height: 100,
    marginBottom: 10,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#E5e4e2',
    textAlignVertical: 'top',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginBottom: 10,
    borderColor: '#E5e4e2',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#E5e4e2',
  },
  picker: {
    flex: 1,
  },
  pickerIcon: {
    marginLeft: 5,
  },
  buttonIcon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#E52B50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SellProductForm;
