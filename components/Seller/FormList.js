import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const SellProductForm = () => {
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Category 1', 'Category 2', 'Category 3'];

  const handleSellProduct = () => {
    // Logic for handling form submission
  };

  return (
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30,

          }}>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRhcml0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
            }}
            size={110}
          />
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 20,
              fontWeight: '700',
            }}>
            Pranjal Srivastava
          </Text>
          <View style ={{flexDirection: 'row', gap :10}}>
          <Icons name="star-circle" size={24} color="green" />
          <Text>Certified Seller </Text>
          </View>
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Seller Name"
            value={sellerName}
            onChangeText={text => setSellerName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Seller Email"
            value={sellerEmail}
            onChangeText={text => setSellerEmail(text)}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Seller Phone Number"
            value={sellerPhone}
            onChangeText={text => setSellerPhone(text)}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={productName}
            onChangeText={text => setProductName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Product Price"
            value={productPrice}
            onChangeText={text => setProductPrice(text)}
            keyboardType="numeric"
          />

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={selectedCategory}
              onValueChange={itemValue => setSelectedCategory(itemValue)}>
              <Picker.Item label="Select Category" value="" />
              {categories.map(category => (
                <Picker.Item key={category} label={category} value={category} />
              ))}
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSellProduct}>
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
    height: 40,
    marginBottom: 10,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#E5e4e2',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 10,
    borderColor: '#E5e4e2',
    borderWidth: 1,
    borderRadius: 10,
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
    borderRadius: 5,
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
