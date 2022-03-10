/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import EnType from 'react-native-vector-icons/Entypo';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';
import feed from './assets/data/feed';
import SearchResultsPage from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import Guests from './src/screens/Guests';
const App = () => {
  const individualPost = feed[0];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={individualPost} /> */}
        {/* <SearchResultsPage /> */}
        {/* <DestinationSearch /> */}
        {<Guests />}
      </SafeAreaView>
    </>
  );
};

export default App;
