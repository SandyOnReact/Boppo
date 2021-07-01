import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';

const foodArray = [
  {
    id: '1',
    foodImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24wvA9ozipJc5-IStQrqZIo_a3urpEZGIGA&usqp=CAU',
    foodDescription: 'Mcdii Burger with yummy taste',
    foodName: 'Mcdonalds Burger',
    foodPrice: 'Rs. 250',
  },
  {
    id: '2',
    foodImage:
      'https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg',
    foodDescription: 'Dominos Pizza with Capsicum',
    foodName: 'Capsicum Pizza',
    foodPrice: 'Rs. 250',
  },
  {
    id: '3',
    foodImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGODsfOS7XSevvmH_1zhgnZgICntzveOiiqA&usqp=CAU',
    foodDescription: 'Rolls with single/double layer',
    foodName: 'Rolls',
    foodPrice: 'Rs. 150',
  },
];

export const FoodScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.foodImage }} style={styles.imageStyle} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.titleStyle}>Product Name</Text>
            <Text style={styles.titleValueStyle}>{item.foodName}</Text>
          </View>
          <View style={styles.spacer}>
            <Text style={styles.captionStyle}>Product Description</Text>
            <Text style={styles.captionStyleValue}>{item.foodDescription}</Text>
          </View>
          <View style={styles.spacer}>
            <Text style={styles.priceStyle}>{item.foodPrice}</Text>
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
