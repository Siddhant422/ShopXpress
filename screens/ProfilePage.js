import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Avatar, Title, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = ({navigation}) => {
  function EditProfileHandler() {
    navigation.navigate('EditProfile');
  }
  function EditFormListHandler() {
    navigation.navigate('FormList');
  }
  function EditProductListHandler(){ 
    navigation.navigate('ProductList')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSectionOne}>
          <View
            style={[
              {flexDirection: 'row', marginTop: 16},
              styles.backgroundStyle,
            ]}>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRhcml0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
              }}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 16,
                    marginBottom: 5,
                  },
                ]}>
                Pranjal Srivastava
              </Title>
              <Caption style={styles.caption}>pranjals01052@gmail.com</Caption>
            </View>
          </View>
        </View>
        <View style={[styles.userInfoSectionTwo, styles.backgroundStyle]}>
          <View style={styles.row}>
            <Text>
              <Icon name="location-pin" size={20} color="#E52B50" />
            </Text>
            <Text style={{marginLeft: 20}}>Palri,Sonipat</Text>
          </View>
          <View style={styles.row}>
            <Text>
              <Icon name="phone" size={20} color="#E52B50" />
            </Text>
            <Text style={{marginLeft: 20}}>+91 9984733790</Text>
          </View>
          <View style={styles.row}>
            <Text>
              <Icon name="mail" size={20} color="#E52B50" />
            </Text>
            <Text style={{marginLeft: 20}}>@iiits.sonepat.ac.in</Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 17,
            marginLeft: 27,
            marginBottom: 15,
            fontWeight: '700',
            color: 'black',
          }}>
          {' '}
          Click to become a Seller!
        </Text>
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: '#dddddd',
                borderRightWidth: 1,
              },
            ]}>
            <TouchableOpacity onPress={EditFormListHandler}>
              <Text>Sell your Product</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <TouchableOpacity onPress={EditProductListHandler}>
              <Text>Products List</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View>
            <TouchableOpacity style={styles.menuItem}>
              <Text>
                <Icon name="shopping-bag" size={20} color="#E52B50" />
              </Text>
              <Text style={styles.menuItemText}>Your Favourite</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={EditProfileHandler}>
              <Text>
                <Icon name="settings" size={20} color="#E52B50" />
              </Text>
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.menuItem}>
              <Text>
                <Icon name="help" size={20} color="#E52B50" />
              </Text>
              <Text style={styles.menuItemText}>help</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.menuItem}>
              <Text>
                <Icon name="logout" size={20} color="#E52B50" />
              </Text>
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 65
  },
  userInfoSectionOne: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  userInfoSectionTwo: {
    paddingHorizontal: 30,
    marginBottom: 25,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 65,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: '#E5e4e2',
    marginTop: 15,
    marginHorizontal: 30,
    borderRadius: 20,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 26,
  },
  backgroundStyle: {
    backgroundColor: '#E5E4E2',
    borderRadius: 27,
    padding: 10,
  },
});
