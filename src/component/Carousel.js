import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../utill/Colors';

const Carousel = ({data}) => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');

  const imageWidth = width * 0.95;

  const [dimension, setDimension] = useState(imageWidth);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollRef = useRef();
  let intervalId = null;
  const onChange = () => {
    setDimension(0.8 * Dimensions.get('window'));
  };
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  });
  const onSlideChange = useCallback(() => {
    // Calculate newIndex here and use it to update your state and to scroll to the new slide
    const newIndex = selectedIndex === data.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: imageWidth * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 9000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      // Clear the interval when component unmounts, otherwise you could have memory leaks
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const onTouchStart = () => {
    // As soon as the user touches the slide, stop the automatic sliding
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    // As soon as the user stops touching the slide, releases it, start the automatic sliding again
    startInterval();
  };

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };

  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: imageWidth / 2,
            flexDirection: 'row',
            width: imageWidth,
            marginHorizontal: 10,
          }}>
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMomentumScrollEnd={setIndex}>
            {data?.map((item, index) => (
              <Image
                source={{
                  uri: `${item?.url}`,
                }}
                style={{
                  height: '100%',
                  resizeMode: 'cover',
                  width: imageWidth,
                  borderRadius: 15,
                }}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={{height: '15%', justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '30%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {data?.map((val, key) => (
            <Text
              key={key}
              style={{
                color: key === selectedIndex ? Colors.secondary : '#B9B6B6FF',
                fontSize: key === selectedIndex ? 17 : 12,
                alignSelf: 'center',
              }}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {flex: 1},
});
