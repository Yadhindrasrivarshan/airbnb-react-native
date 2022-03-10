import {View, Text, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
export default function Guests() {
  const [count, setCount] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.button}
            onPress={() =>
              count > 0
                ? setCount(prevState => prevState - 1)
                : Alert.alert(
                    'Warning!',
                    'You should not decrease the number of count less than 0',
                  )
            }>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{count}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setCount(prevState => prevState + 1)}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.button}
            onPress={() =>
              children > 0
                ? setChildren(prevState => prevState - 1)
                : Alert.alert(
                    'Warning!',
                    'You should not decrease the number of count less than 0',
                  )
            }>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setChildren(prevState => prevState + 1)}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: '#8d8d8d'}}>Under 2</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={styles.button}
            onPress={() =>
              infants > 0
                ? setInfants(prevState => prevState - 1)
                : Alert.alert(
                    'Warning!',
                    'You should not decrease the number of count less than 0',
                  )
            }>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
          <Pressable
            style={styles.button}
            onPress={() => setInfants(prevState => prevState + 1)}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
