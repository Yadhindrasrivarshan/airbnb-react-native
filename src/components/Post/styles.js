import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 18,
    lineHeight: 20,
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 14,
    color: '#5b5b5b',
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    textDecorationLine: 'underline',
  },
});

export default styles;
