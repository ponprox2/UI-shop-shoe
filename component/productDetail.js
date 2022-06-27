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
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Back from './icon/arrowBack.svg';
import Setting from './icon/setting.svg';
import IconSelect from './icon/select.svg';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const arrImg = [
  require('./image/imagedeatail1.png'),
  require('./image/imagedeatail1.png'),
  require('./image/imagedeatail1.png'),
];
const color = ['#29605D', '#5B8EA3', '#746A36', '#2E2E2E'];
const size = ['size S', 'size M', 'size L', 'size XL', 'size XXL'];

const renderItem = ({item, index}) => {
  return (
    <View style={styles.boxImage}>
      <Image source={item} />

      <Pagination1 index={index} style={styles.pagination} />
    </View>
  );
};
function Pagination1({index}) {
  return (
    <Pagination
      dotsLength={arrImg.length}
      activeDotIndex={index}
      dotStyle={{
        width: 35,
        height: 6,
        marginRight: -15,
        backgroundColor: '#FFFFFF',
      }}
      inactiveDotStyle={{
        width: 25,
        height: 6,
        backgroundColor: '#FFFFFF',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    />
  );
}
function ProductDetail({navigation, route}) {
  const params = route.params;
  console.log(params);
  const [index, setIndex] = useState(1);
  const [indexChooseColors, setIndexChooseColors] = useState(0);
  const [sizeChoose, setSizeChoose] = useState('');
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Back />
            </TouchableOpacity>
            <Setting />
          </View>
          <View style={{width: 370, height: 370}}>
            <Carousel
              data={arrImg}
              renderItem={renderItem}
              layout={'default'}
              itemWidth={370}
              sliderWidth={370}
              onSnapToItem={index => setIndex(index)}></Carousel>
          </View>
          <View style={styles.content}>
            <Text style={styles.name}>{params.name}</Text>
            <Text style={styles.price}>{params.price}</Text>
            <Text style={styles.description}>
              A pillar of sneaker culture, the Nike Air Max 90 remains one of
              the most significant designs since the brand’s founding. And while
              its OG colorways are some of the most significant A pillar of
              sneaker culture, the Nike Air Max 90 remains one of the most
              significant designs since the brand’s founding. And while its OG
              colorways are some of the most significant A pillar of sneaker
              culture, the Nike Air Max 90 remains one of the most significant
              designs since the brand’s founding. And while its OG colorways are
              some of the most significant A pillar of sneaker culture, the Nike
              Air Max 90 remains one of the most significant designs since the
              brand’s founding. And while its OG colorways are some of the most
              significants
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          paddingLeft: '4%',
          paddingRight: '7%',
        }}>
        <View style={styles.select}>
          <View style={styles.boxChooseColor}>
            {color.map((value, index) => (
              <TouchableOpacity onPress={() => setIndexChooseColors(index)}>
                <View
                  style={[
                    styles.chooseColor,
                    {backgroundColor: value},
                    indexChooseColors === index
                      ? {borderWidth: 2}
                      : {borderWidth: 0},
                  ]}></View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.boxChooseSize}>
            <Menu>
              <MenuTrigger
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  width: 138,
                  height: 38,
                  borderRadius: 13,
                }}>
                <Text style={{marginRight: 6}}>
                  {sizeChoose || 'Choose Size'}
                </Text>
                <IconSelect />
              </MenuTrigger>

              <MenuOptions style={{maxHeight: 100}}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{
                   
                    maxHeight: 200,
                  }}>
                  {size.map((value, index) => (
                    <MenuOption onSelect={() => setSizeChoose(value)}>
                      <Text
                        style={{
                          color: sizeChoose === value && 'red',
                          width: 150,
                          textAlign: 'center',
                        }}>
                        {value}
                      </Text>
                    </MenuOption>
                  ))}
                </ScrollView>
              </MenuOptions>
            </Menu>
          </View>
        </View>

        <View style={styles.addToCart}>
          <Text style={styles.textAddToCart}>Add to bag</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
  },
  boxImage: {
    width: 370,
    minHeight: 350,
    marginTop: 10,
    backgroundColor: '#EEEEEE',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 13,
  },
  name: {
    fontSize: 24,

    color: '#000000',
    marginBottom: 12,
    fontWeight: '700',
  },
  price: {
    fontSize: 18,
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: '700',
  },
  description: {
    fontSize: 15,
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 0.4)',
    fontWeight: '600',
    marginTop: 18,
  },
  chooseColor: {
    width: 23,
    height: 23,
    marginRight: 13,
    borderRadius: 50,
  },
  boxChooseColor: {
    flexDirection: 'row',
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  addToCart: {
    width: 340,
    height: 53,
    backgroundColor: '#000000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  textAddToCart: {
    color: '#fff',
  },
  boxChooseSize: {
    width: 138,
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 12,
  },
});

export default ProductDetail;
