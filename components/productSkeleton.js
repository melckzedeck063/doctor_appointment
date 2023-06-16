import React from 'react';
import { View, StyleSheet, Animated,Text } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ProductSkeleton = () => {
  const animatedOpacity = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedOpacity, {
          toValue: 0.5,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return (
    <Animated.View style={[styles.card, { opacity: animatedOpacity }]} className="bg-slate-500" >
      {/* Add your skeleton-like card content here */}
      {/* <Text  className="text-white font-bold p-3"> Home sweet home </Text> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 26,
    marginVertical: 8,
    elevation: 2,
    height : responsiveHeight(20),
    width : responsiveWidth(45)
  },
});

export default ProductSkeleton;