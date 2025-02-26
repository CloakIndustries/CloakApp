import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import {Colors} from '../utill/Colors';

const IcontextBox = ({iconname, tagline, onPress, type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {type == 1 && (
          <Icon name={iconname} size={30} color={Colors.secondary} />
        )}
        {type == 2 && (
          <Icon2 name={iconname} size={30} color={Colors.secondary} />
        )}

        <Text style={styles.tagText}>{tagline}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Icon name="chevron-right" size={30} color={Colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};

export default IcontextBox;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.7,
  },
});
