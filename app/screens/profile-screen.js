import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

export const ProfileScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileContainer}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: 'https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg',
          }}
        />
      </View>
      <View style={styles.userDetailsContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.titleStyle}>UserName:</Text>
          <Text style={styles.titleValueStyle}>SandyOnReactNative</Text>
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.titleStyle}>Phone No:</Text>
          <Text style={styles.titleValueStyle}>+918888888888</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  profileContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetailsContainer: {
    flex: 0.6,
    marginHorizontal: '5%',
  },
  usernameContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  titleValueStyle: {
    marginHorizontal: '8%',
    color: 'gray',
    fontWeight: '700',
    fontSize: 16,
  },
});
