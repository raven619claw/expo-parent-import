import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const { textStyle } = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 50,
    marginHorizontal: 50,
  },
});

const items = [
  { name: '1' },
  { name: '2' },
  { name: '3' },
  { name: '4' },
  { name: '5' },
  { name: '6' },
  { name: '7' },
];
const ListScreen = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={({ name }) => name}
      data={items}
      renderItem={({ item: { name } }) => <Text style={textStyle}>{name}</Text>}
    />
  );
};

export default ListScreen;
