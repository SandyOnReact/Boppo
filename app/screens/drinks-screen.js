import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';

const foodArray = [
  {
    id: '1',
    drinkImage:
      'https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    drinkDescription: 'Jack Daniels with jennesse Honey',
    drinkName: 'Jack Daniels',
    drinkPrice: 'Rs. 2500',
  },
  {
    id: '2',
    drinkImage:
      'https://images.theconversation.com/files/194291/original/file-20171113-27595-ox08qm.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    drinkDescription: 'Cocktail with little to no alcohol',
    drinkName: 'Margarita`s Cocktail',
    drinkPrice: 'Rs. 800',
  },
  {
    id: '3',
    drinkImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8hCxZSWgCyPqaSeoud0vNJQszJBnhw-IATA&usqp=CAU',
    drinkDescription: 'Soft and Refreshing drinks to have at any time',
    drinkName: 'Soft Drink',
    drinkPrice: 'Rs. 150',
  },
];

export const DrinkScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.drinkImage }} style={styles.imageStyle} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.titleStyle}>Product Name</Text>
            <Text style={styles.titleValueStyle}>{item.drinkName}</Text>
          </View>
          <View style={styles.spacer}>
            <Text style={styles.captionStyle}>Product Description</Text>
            <Text style={styles.captionStyleValue}>
              {item.drinkDescription}
            </Text>
          </View>
          <View style={styles.spacer}>
            <Text style={styles.priceStyle}>{item.drinkPrice}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={foodArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    borderColor: 'gray',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  imageContainer: {
    flex: 4,
  },
  imageStyle: {
    borderRadius: 8,
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flex: 6,
    paddingHorizontal: '5%',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleValueStyle: {
    fontSize: 16,
    color: 'gray',
  },
  captionStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  captionStyleValue: {
    fontSize: 12,
    color: 'gray',
  },
  spacer: {
    marginVertical: '4%',
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
