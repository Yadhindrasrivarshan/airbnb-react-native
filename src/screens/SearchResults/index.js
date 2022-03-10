import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

export default function SearchResultsPage(props) {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}
