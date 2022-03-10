import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import styles from './styles';
import SearchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
export default function DestinationSearch(props) {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Where are you going?'}
        onChangeText={value => setInputText(value)}
      />
      <FlatList
        data={SearchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
