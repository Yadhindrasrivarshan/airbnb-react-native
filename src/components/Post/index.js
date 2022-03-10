import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles.js';
const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://thumbs.dreamstime.com/b/apartment-building-19532951.jpg',
        }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        This is wonderful flat, Good to buy this. Happy living.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$35 </Text>
        <Text style={styles.price}> $30</Text>/ Night
      </Text>
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
