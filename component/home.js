/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
} from 'react-native';
import BottomNav from './bottomNav';
import ProductDetail from './productDetail';
import Notify from './icon/notify.svg';
import Search from './icon/search.svg';
import Nike from './icon/nikeLogo.svg';
import Jordan from './icon/jordan.svg';
import Adidas from './icon/adidas.svg';
import Puma from './icon/puma.svg';

function HeaderFlatlist() {
  return (
    <View>
      <View>
        <Text style={styles.topBrandText}>Top Brands</Text>
      </View>
      <View style={styles.superBoxBrand}>
        <View style={styles.boxBrand}>
          <Nike fill={'black'} />
        </View>
        <View style={styles.boxBrand}>
          <Adidas />
        </View>
        <View style={styles.boxBrand}>
          <Puma />
        </View>
        <View style={styles.boxBrand}>
          <Jordan />
        </View>
      </View>
      <View>
        <Text style={styles.popularText}>Popular</Text>
      </View>
    </View>
  );
}

function Home({navigation}) {
  //   const [login, setLogin] = useState(false);
  const arrProuct = [
    {
      id: 1,
      image: require('./image/image1.png'),
      price: '$239.80',
      name: 'Nike Air Max 90',
    },
    {
      id: 2,
      image: require('./image/image2.png'),
      price: '$249.80',
      name: 'Nike Air Max 90',
    },
    {
      id: 3,
      image: require('./image/image3.png'),
      price: '$259.80',
      name: 'Nike Air Max 90',
    },
    {
      id: 4,
      image: require('./image/image4.png'),
      price: '$269.80',
      name: 'Nike Air Max 90',
    },
    {
      id: 5,
      image: require('./image/image3.png'),
      price: '$259.80',
      name: 'Nike Air Max 90',
    },
    {
      id: 6,
      image: require('./image/image4.png'),
      price: '$269.80',
      name: 'Nike Air Max 90',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', item);
        }}>
        <View
          style={[
            styles.superBoxPopular,
            index % 2 == 0 ? styles.superBoxPopular1 : {marginTop: 30},
            index == 1 ? {marginTop: 30} : styles.superBoxPopular,
          ]}>
          <View style={styles.boxPopular}>
            <Image style={styles.tinyLogo} source={item.image} />
            <Nike style={styles.tinyBrand} fill={'rgba(0, 0, 0, 0.4)'} />
          </View>
          <Text style={styles.priceText}>{item.price}</Text>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sneakrs</Text>
        <Notify />
      </View>

      <View style={styles.form}>
        <Search style={styles.searchIcon} />
        <TextInput
          style={styles.inputPassword}
          placeholderTextColor="#929292"
          placeholder="Search"></TextInput>
      </View>

      <View style={{flex: 1, marginBottom: 50}}>
        <FlatList
          ListHeaderComponent={<HeaderFlatlist />}
          showsVerticalScrollIndicator={false}
          data={arrProuct}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id}></FlatList>
      </View>
    </View>
  );
}
const TEXT = {
  color: '#fff',
  textAlign: 'center',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: '9%',
    paddingRight: '9%',
    paddingTop: '6%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    lineHeight: 21,
    fontFamily: 'Gilroy-Bold',
    fontWeight: 'bold',
    color: '#000000',
  },
  form: {
    height: 49,
    borderRadius: 25,
    backgroundColor: '#EEEEEE',
    marginTop: 25,
    marginBottom: 27,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  inputPassword: {
    height: 49,

    paddingHorizontal: 15,
    fontSize: 20,
    color: '#929292',
  },
  topBrandText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 17,
  },
  superBoxBrand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 39,
  },
  boxBrand: {
    width: 55,
    height: 57,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 17,
  },
  boxPopular: {
    width: 142,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: '#000000',
    marginTop: 14,
  },
  nameText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  brandProduct: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
  tinyBrand: {
    position: 'absolute',
    right: 19,
    bottom: 19,
  },

  superBoxPopular1: {
    marginRight: 21,
  },
});

export default Home;
